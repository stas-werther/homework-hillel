
let array = ['1','2','3','4','5','6'];

Array.prototype.forEach = function(func){        
  for(let length = 0; length < this.length; length++) {
    func(element = this[length], index = length, array = this);
  }
};

let newArray = [];
array.forEach((element, index, array) => {
alert(element);                       
newArray[index] = element;               
console.log('Массив: '+ array);   
}
);
console.log('Клонированый массив: '+ newArray);  // Копия
// Конец forEach

// Реализация метода массива some
Array.prototype.some = function(func) {       
   let $$false = 0;
   let length = 0; 
   for(length; length < this.length; length++) {
    let element = this[length]
    if(func(element)) {
        return true; 
    }
    else if(!func(element)) {
        $$false += 1;
    }
 };
if($$false === length){
    return false
 }
};
alert(array.some((element) => element >= 6));
// Конец some

Array.prototype.every = function(func) {       
    let $$true = 0; 
    let length = 0;
    for(length; length < this.length; length++) {
    let element = this[length]
    if(func(element)){
        $$true += 1;
    }
    else if(!func(element)){
    return false
    }
 };
 if($$true === length){
     return true
 };
 };
 
 
 
 alert(array.every((element) => element > 0));
 */