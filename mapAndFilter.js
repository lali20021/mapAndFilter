var arr1 = [3, 9, 15, 4, 10]

const mult10 = (arr) =>{
    return newArr = arr.map(value => value * 10)
}
console.log(mult10(arr1));

var arr2 = [2, 7, 3, 5, 8, 10, 13]

const onlyOdd = (arr) => {
    return newArr2 = arr.filter(value => value % 2 !=0)
}
console.log(onlyOdd(arr2));


var combo_arr = [7, "n", "i", "c", 10, "e", "w", 3, "o", "r", "k"]
const onlyLetters = (arr) => {
    return newArr3 = arr.filter(value => typeof value === "string")
}
console.log(onlyLetters(combo_arr));

var animals = [
  { name: "Waffles", type: "dog", age: 12 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 },
];

const justCat = (arr) => {
    return newArr4 = arr.filter(value => value.type === "cat")
}
console.log(justCat(animals));

const justNames = (arr) => {
    return newArr5 = arr.map(value => value.name)
}
console.log(justNames(animals));

var str = "javascript is awesome"
//LONG FORM
split string into array
var newStr = str.split('')
//created func to find vowels
const allVowels = (arr) => {
    return newArr6 = arr.filter(value => value != "a" && value != "e" && value != "i" && value != "o" && value != "u")
}
//made a variable that represents ^^^ array
var vowelArr = allVowels(newStr)
//join ^^^ array into a string again
const vowelStr = vowelArr.join('')
console.log(vowelStr);

//SHORT FORM (more efficient)
const allVowels = (arr) => {
    return newArr6 = arr.split('').filter(value => value != "a" && value != "e" && value != "i" && value != "o" && value != "u").join('')
}
console.log(allVowels(str));


var num1 = [3, 7, 10, 5, 4, 3]
var num2 = [7, 8, 2, 1, 5, 4]

const noDups = (arr1, arr2) => {
    //concat both arrays
    var newArr7 = arr1.concat(arr2)
    //create a variable that deletes duplicates using "Set"
    var noDups2 = new Set(newArr7)
    //converted ^^^ var using spread operator
    var noDupsFinal = [...noDups2]
    // returned the new array w no duplicates
    return noDupsFinal
}
console.log(noDups(num1,num2));

const noDuplicates = (arr1, arr2) => {
    var newArr7 = Array.from(new Set(arr1.concat(arr2)))
    return newArr7
}
console.log(noDuplicates(num1,num2));
