const array = [1, 2, 3, 4, 5, 6, 7, 4, 5, 45];
removeElement(array, 7 );
console.log(array)

function removeElement(arr, el) {
    index = arr.indexOf(el);
    if(index >= 0) {
        arr.splice(index, 1);
    }
}
