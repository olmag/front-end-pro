function* Foo() {
    console.log('start')
    yield 1
    yield 2
    yield 3
    console.log('finish')
  }
  
//   const iterator = Foo()
//   console.log(iterator.next().value) // 1
//   console.log(iterator.next().value) // 1
//   console.log(iterator.next().value) // 1

// console.log(iterator.next().done)// false

function Boo() {
    const array = [1,2,3];
    let nextIndex = 0;

    console.log('start')
    return {
       next: function(){
        if(nextIndex < array.length){
            return {value: array[nextIndex++], done: false}
        } else {
            console.log('finish')
            return {done: true};
        }
        }
    
    }
}

const iterator = Boo()
console.log(iterator.next().value) // 1
console.log(iterator.next().value) // 2
console.log(iterator.next().done)// false