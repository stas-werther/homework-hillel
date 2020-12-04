const character = {
    name:'Sasuke',
    key:'Uchiha',
};

const getObjStrLenght = (object) => {
    let lenght = 0;
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const value = object[key];
            if(typeof value !== 'string') continue;
            lenght += value.length;
        }
    }
    return lenght;
};

const strLenght = getObjStrLenght(character);
console.log(strLenght);
