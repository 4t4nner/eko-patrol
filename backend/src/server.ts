import express,{Response} from 'express';
import * as bodyParser from "body-parser";
import * as ejs from "ejs";
import  cors from "cors";
import multer,{Multer} from "multer";
import {uuid} from "uuidv4";
import {promises as fs} from "fs";
import * as path from "path";
import dateformat from "dateformat";
import {
    batchInsert,
    getConfirmers, getLocation,
    // getLocationById,
    getLocationPhoto,
    getParticipantLocation, getUsers,
    query,
    updateById
} from "./sql"
import {arrayUnique, filterObj} from "./helper";



const app = express();

const PORT = process.env.PORT || 8000;

const photoDir = path.resolve(__dirname + '/../../public');
// const tmpPhotoDir = photoDir + '/tmp';


const storage = multer.diskStorage({
    destination: photoDir,
    filename: function (req, file, cb) {
        // the filename field is added or altered here once the file is uploaded
        cb(null, uuid() + '_' + file.originalname)
    }
});

// @ts-ignore
const upload = multer({ storage: storage });


app.use(cors());
// @ts-ignore
app.options('*', cors());  // enable pre-flight

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get('/', (req, res) => {
    res.render(__dirname + '/index.html');
});

// app.post('/profile', upload.none(), function (req, res, next) {
//     // req.body содержит текстовые поля
// })

app.use('/public', express.static(path.resolve(__dirname + '../../../public')));


// app.get('/location', (req,res) => {
//     const filter = req.query.filter as Record<string,string>;
//
//     getLocationById(filter).then(locations => {
//         res.json(locations);
//     })
// });
/**
 * @return confirmers of location
 */
app.get('/location/confirmers/:locationId', (req,res) => {
    getConfirmers(req.params.locationId).then(users => {
        res.json(users);
    }).catch(e => handleError(e, res));
});

/**
 * Экран текущих эвентов
 * if /?participantId=number then get location where user participated
 * ?<SQL where val - like id>
 * if table_props and participantId in query - return union of selection results
 *
 * @return location[] with photos
 */
app.get('/location', async (req,res) => {
    try {
        const participantId = req.query.participantId;
        const locations = await ((p: Promise<any>[]) => {
            if(participantId){
                p.push(getParticipantLocation(req.query.participantId as string))
            }
            // @ts-ignore
            if(!participantId || participantId && (req.query.length > 1)){
                p.push(getLocation(filterObj(req.query ,['org'])));
            }
            return Promise.all(p)
        })([]).then(([locs1, locs2]) => ([...(locs1 ? locs1 : []),...(locs2 ? locs2 : [])]));

        const locMap = new Map(locations.map(loc => [loc.id, loc]));
        let orgs:Record<number,number> = {};
        const locIds = locations.map(({id, org}) => {
            orgs[id] = org;
            return id;
        });

        const getLocationPhotoPromise = getLocationPhoto(locIds).then(tempLocPhoto => {
            tempLocPhoto.forEach(({photo, pl}) => {
                const loc = locMap.get(pl.location_id);
                debugger;
                if(loc && !loc.photos){
                    // @ts-ignore
                    loc.photos = []
                }
                if(loc && pl.photo_id){
                    // @ts-ignore
                    loc.photos.push(photo);
                }
            })
        });
        // @ts-ignore
        const getOrgsPromise = getUsers(arrayUnique(Object.values(orgs))).then((users: Record<string, string>[]) => {
            const mUsers = new Map(users.map((user) => ([user.id, user])));
            Object.entries(orgs).forEach(([locId, orgUserId]) => {
                const loc = locMap.get(Number(locId));
                // @ts-ignore
                loc['org'] = mUsers.get(orgUserId);
                console.log(loc);
            });
        });

        Promise.all([getLocationPhotoPromise, getOrgsPromise]).then(() => {
            res.json(locations);
        });

    } catch (e) {
        handleError(e, res);
    }
});


/**
 * participants[] - id of participating users
 * start_photo[]
 * end_photo[]
 * end_date = "2021-05-15T00:57"
 org = "1"
 reward = "2.4"
 start_date = "2021-05-15T00:56"
 status = "test"
 */
app.post('/location/:id?', upload.any(), async (req, res) => {
    try {

        debugger;
        let files:Express.Multer.File[] = req.files as Express.Multer.File[];
        const confirmers = req.body.confirmers;
        const participants = req.body.participants;
        const id = req.params.id;
        const photoIds:number[] = await saveLocPhotos(files);
        debugger;
        let location: Record<string,any> = {
            ...(id ? {} : {creation_date: formatDate()})
        };
        ['geotag', 'org', 'status', 'reward', 'square', 'availability'].forEach(n => {
            location[n] = req.body[n];
        });
        ['start_date', 'end_date'].forEach(n => {
            location[n] = req.body[n];
        });

        let addedLocation;
        if(id){
            await updateById('location', location, id);
        } else {
            addedLocation = (await batchInsert('location', Object.keys(location), [Object.values(location)]))[0];
        }

        debugger;
        const locId = Number(id || addedLocation);

        let [addedConfirmers, addedParticipants] = await Promise.all([
            ...(confirmers ? [saveConfirmers(locId, confirmers)] : []),
            ...(participants ? [batchInsert('participant', ['location_id','user_id'], participants.map((pId: number) => [locId, pId]))] : []),
        ]);

        res.json({
            addedLocation,
            addedConfirmers,
            addedParticipants
        });

    } catch (e) {
        res.statusCode = 500;
        res.json(e);
    }
});

app.post('/user', upload.any(), (req, res) => {

    let [cols, vals] = getInsParams(req.body,['photo','name','phone','email','rating','score']);

    if(cols.length < 2){
        res.status(400).send('wrong fields');
    }

    batchInsert('user', cols, [vals]).then(id => {
        res.send(id[0]);
    }).catch(e => {
        res.status(500).send(e);
    });
});

app.post('/user/:id', upload.any(), (req, res) => {

    let [cols, vals] = getInsParams(req.body,['photo','name','phone','email','rating','score']);

    batchInsert('user', cols, [vals]).then(id => {
        res.send(id[0]);
    });
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

/**
 * save to ../public
 * save to db
 * return
 */
async function saveLocPhotos(files: Express.Multer.File[]) {
    const res = await batchInsert(
        'photo',
        ['path','type'],
        files.map(({originalname,fieldname}) => {
            let type = (matched => {
                if(!matched || !matched[1]){
                    throw 'not matched photo name';
                }
                return matched[1];
            })(fieldname.match(/photo\[(\w+)\]\[\]/));

            return [`/public/${originalname}`, type]
        })
    );
    debugger;
    return res;
}

function saveConfirmers(locId: number, userIds: number[]) {
    return batchInsert('location_confirmer', ['location_id','user_id'], userIds.map(userId => [locId, userId]))
}

function formatDate(date: Date = new Date()) {
    // @ts-ignore
    return dateformat(date, "yyyy-mm-dd h:MM:ss");
}

function getInsParams(body: Record<string,string|number>, tableCols:string[]):[string[],(string|number)[]] {

    let cols:string[] = [];
    let vals:(string|number)[] = [];
    tableCols.forEach(col => {
        if(body[col] === undefined){
            return;
        }
        cols.push(col);
        vals.push(body[col]);
    });
    return [cols, vals]
}

function handleError(e:Error,res: Response) {
    console.log(e);
    res.status(500);
    res.json(e);
}
