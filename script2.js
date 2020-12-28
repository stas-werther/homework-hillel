function counter() {
    let value = 0;
    return{
      inc:() => {console.log(++value)},
      dec:() => {console.log(--value)},
      value:() => {return value},
    }
  };

const iterator = counter();
iterator.inc() // увеличивает значение на 1
iterator.inc() // еще на 1
iterator.dec() // уменьшает на 1

console.log(iterator.value()) // выводит 1