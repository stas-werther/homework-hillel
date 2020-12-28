const sum = (...nums) => { 
    return nums.reduce((acc,next) => acc + next); 
};
const curry = (sum, ...nums) => {
    return (...num) => {return sum(...num,...nums);
    };
};

const curriedFunction = curry(sum, 2,4); // запоминает для вызова sum 2 параметра

console.log(curriedFunction(6,10)) // выводит 10 т.е. выполняется функционал sum(1,2,3,4).