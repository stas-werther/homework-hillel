//Первое задание
function outputNums(n) {
    return (n == 1 ) ? n: outputNums(n-1) + n.toString();
}

console.log(outputNums(6));

//Второе задание
function accuratePow(n) {
  if(n < 2) {
    console.log('NO');
  } else if (n > 2){
      accuratePow(n/2);
  } else if (n == 2){
    console.log('Yes');
  };
}

accuratePow(8);

//Третье задание
function sumNums(n) {
    return(n == 1) ? n : n + sumNums(n - 1);
}
console.log(sumNums(10));

//Четвёртое задание
const copyObj = (obj) => {
    let result = {};
    let keys = Object.keys(obj);

    keys.forEach((key) => result[key] = (typeof (obj[key]) == "object") ? copyObj(obj[key]) : obj[key])

    return result;
}


let counter = 1;

const obj = {
    a: {
        val: counter++,
        b: {
            val: counter++,
            c: {
                val: counter++,
                d: {
                    val: counter++,
                    g: {}
                }
            }
        }
    }
}

 console.log(obj)

let newObj = copyObj(obj);

obj.a.val = 99;

 console.log(newObj)

//---5

const getFromPoint = (obj, str) => {
    let result = undefined;
    const points = str.split(".");
    const nextKey = points.shift();

    if (obj.hasOwnProperty(nextKey))
        if (points.length === 0) {
            result = obj[nextKey];
        } else {
            result = getFromPoint(obj[nextKey], points.join('.'));
        }
    return result;

}

let val = getFromPoint(obj, "a.b.val");

console.log(val)