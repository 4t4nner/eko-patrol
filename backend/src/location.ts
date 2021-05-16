/**
 * add scores to location participants if needed (if status changed to 'history')
 */
import {getEntity, getLocationParticipants, multUpdate} from "./sql";
import {arrayUnique} from "./helper";

export async function addScore(location: Record<string, string | number>) {
    let {org, reward} = location;
    const participantIds = await getLocationParticipants(Number(location.id));
    const userIds:number[] = arrayUnique([...participantIds, org]);
    const users = await getEntity('user',{id: userIds});

    const resUpdate = await multUpdate(
        'user',
        ['id','score','rating'],
        users.map(({id, score, rating}) => {
            reward = Number(reward);
            score = Number(score);
            rating = Number(rating);

            return [id, reward + score, reward + rating]
        })
    );
    
}