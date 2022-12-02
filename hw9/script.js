const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(12, characters);
console.log(key); // eg599gb60q926j8i

function generateKey(strLength, str) {
    let randomStr = '';
    for(let i = 0; i < strLength; i++) {
        randomStr += str.charAt(Math.floor(Math.random() * str.length))
    }
    return randomStr;
}
