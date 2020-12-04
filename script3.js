const valueLenght = (value) => {
     switch(typeof value){
         case 'string':
             return valueLenght;
         case 'boolean':
             return Number(value);
         case 'function':
             return 0;
         default:
             return value;
     }
}

const copyWithNumericValues = (object) => {
    const newObject = {};
    for (const key in object) {
        newObject[key] = valueLenght(object[key]);
    }
    return newObject;
};

const numericValues = copyWithNumericValues(character);
console.log(numericValues);