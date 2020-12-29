function counter() {
    value = 0;
    return {
      inc:() => { return ++value},
      dec:() => {return --value},
      value:() => {return value},
    }
  };

const iterator = counter();
console.log(iterator.inc()); // увеличивает значение на 1
console.log(iterator.inc()); // еще на 1
console.log(iterator.dec()); // уменьшает на 1

console.log(iterator.value()) // выводит 1