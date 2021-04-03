const strEnum = <T extends string>(o: Array<T>): { [TK in T]: TK } => {
    return o.reduce((res, key) => {
        res[key] = key;
        return res;
    }, Object.create(null));
}

export default strEnum;