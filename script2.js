const copyObj = (object) => {
    const newObject = {};
    for (const key in object) {
        newObject[key] = null;
    }
    return newObject;
};

const copyLenght = copyObj(character);
console.log(copyLenght);