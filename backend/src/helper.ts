
type Key = string | number
export function filterObj(obj: Record<Key,any>, keys: Key[]) {
    const sKeys = new Set(keys);
    return Object.fromEntries(Object.entries(obj).filter(([k]) => sKeys.has(k)))
}
export function arrayUnique(a: any[]) {
    const filter = new Set();
    return a.filter(v => {
        const has = filter.has(v);
        if(!has){
            filter.add(v);
        }
        return !has;
    });
}