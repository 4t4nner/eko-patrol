// escape sql injections
// connection.escape(userId);

import * as mysql from "mysql";
import {QueryOptions} from "mysql";


let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'eko_patrol',
    password : 'eko_patrol',
    database : 'eko_patrol'
});

connection.connect();

// query('select * from photo').then(r => {
//     console.log(JSON.stringify(r));
// });



function putLocation() {

}

export function endConnection() {
    connection.end();
}

export function getLocationsWithUser(userId: number|string) {

}

export function getLocation(filter:Record<string,string>): Promise<Record<string|number,string>[]>  {
    const cond = Object.entries(filter).map(([k,v]) => `${k}=` + (typeof v === 'string' ? `'${v}'` : v)).join(' AND ');
    const sql = `
SELECT * from location
WHERE ${cond}`;
    // @ts-ignore
    return query(sql);
}

// export function getLocationById({id,userId}: {id?: number|string, userId?: number|string}) {
//     const cond = ((cond:string[]) => {
//         if(id){
//             cond.push( `location.id=${id}`);
//         }
//         if(userId){
//             cond.push( `user_id=${userId}`);
//         }
//         return cond;
//     })([]).join(' AND ');
//
//
//     const sql =
//         'SELECT * from location\n' +
//         'LEFT JOIN location_confirmer lc on location.id = lc.location_id\n' +
//         'LEFT JOIN photo_location pl on location.id = pl.location_id\n' +
//         'LEFT JOIN photo p on pl.photo_id = p.id\n' +
//         'LEFT JOIN user u on lc.user_id = u.id\nWHERE ' +
//         `${cond}`;
//     return query({sql, nestTables:true}).then(res => {
//         debugger;
//         return res;
//     })
// }

export function getConfirmers(locationId:string) {
    const sql = `SELECT * from user
LEFT JOIN location_confirmer lc on user.id = lc.user_id
WHERE lc.location_id=${locationId}`;
    return query({sql, nestTables:true}).then(
        // @ts-ignore
        (res:Record<string,string>[]) => {
        return res.map(({user}) => user);
    })
}

export function getUserByLogin(login:string) {
    return getEntity('user', {login})
}

export function getEntity(table: string, filter: Record<string,string|number>) {
    const condition = Object.entries(filter).map(([k,v]) => `${k}=` + (typeof v==='string' ? `'${v}'` : v)).join(',');
    const sql = `SELECT * from ${table} WHERE ${condition}`;
    return query(sql)
}

export function getUsers(userIds:string[]) {
    const sql = `SELECT * from user
WHERE id IN ( ${userIds.join(',')} )`;
    return query({sql, nestTables:true}).then(
        // @ts-ignore
        (res:Record<string,string>[]) => {
        return res.map(({user}) => user);
    })
}

export function getParticipantLocation(userId:string): Promise<Record<string,string>[]> {
    const sql = `SELECT * from location
LEFT JOIN participant p on location.id = p.location_id
WHERE p.user_id=${userId}`;
    // @ts-ignore
    return query({sql, nestTables:true}).then(
        // @ts-ignore
        (res:Record<string,string>[]) => {
        return res.map(({location}) => location);
    })
}
export function getLocationPhoto(locIds:string[]): Promise<Record<string,Record<string,string>>[]> {
    const sql = `SELECT * from photo
LEFT JOIN photo_location pl on photo.id = pl.photo_id
WHERE pl.location_id IN (${locIds.join(',')})`;
    // @ts-ignore
    return query({sql, nestTables:true})
}

export function getById(table:string, id: number) {
    const sql = `SELECT * from ${table} WHERE id=${id}`;
    return query(sql)
}

export function batchInsert(table: string, columns: string[], values: (string|number)[][]) {
    const sValues = values.map(
        values => `(${values.map(
            v => typeof v === "string" ? `'${v}'` : v).join(',')})`
    ).join(',\n');
    return query(`INSERT INTO ${table} (${columns.join(',')}) ` + ` VALUES ${sValues}`)
        // @ts-ignore
        .then((res:Record<string, number>) => {
            let r = [];
            for (let i=res.insertId; i<res.insertId + res.affectedRows; i++){
                r.push(i);
            }
            return r;
        });
}

export function updateById(table: string, entity: Record<string, number|string>, id: number|string) {
    return update(table, entity, `id = ${id}`)
}

export function update(table: string, entity: Record<string, number|string>, where:string) {
    const set = Object.entries(entity).map(([col,v]) => `${col} = ${v}`).join(' ,');
    const sQuery = `UPDATE ${table}
    SET ${set}
    WHERE ${where};`;
    return query(sQuery)
}

export function query(query: string | QueryOptions): Promise<Record<string, number|string>[]> {
    return new Promise(function (resolve, reject) {
        connection.query(query, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });

    })
}