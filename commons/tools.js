export const objKeysFromArray = function(obj) {
    const keysArray =  Object.keys(obj);
    let objKeys = {};
    keysArray.forEach ((keyName) => {
        objKeys[keyName] = keyName;
    })
    return objKeys;
}
