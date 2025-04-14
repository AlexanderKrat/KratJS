const Num = 7;
const Name = "John";
const NoSuchName = "There is no such name";

const NumArray = [2, 4, 6, 8, 9];

function func(number, name, array){
  if(number > Num && name != Name){
    console.log("Hello");
  }
  if(name == Name)
  {
    console.log("Hello, John"); 
  }
  if(name != Name){
    console.log(NoSuchName); 
  }
  return(getMultiplesOfThree(array));   
}

function getMultiplesOfThree(arr) {
  return arr.filter(num => typeof num === 'number' && num % 3 === 0);
}

// Results 
console.log(`Result for inputs 8, "John" and [2, 4, 6, 8, 9]:\n${func(8, "John", NumArray)}\n`);
console.log(`Result for inputs 7, "John" and [2, 4, 6, 8, 9]:\n${func(7, "John", NumArray)}\n`);
console.log(`Result for inputs 7, "NotJohn" and [2, 4, 6, 8, 9]:\n${func(7, "NotJohn", NumArray)}\n`);
console.log(`Result for inputs 8, "NotJohn" and [2, 4, 6, 8, 9]:\n${func(8, "NotJohn", NumArray)}\n`);
// Qestions

// Given bracket sequence: [((())()(())]] 
// Can this sequence be considered correct? 
// If the answer to the previous question is “no”, then what needs to be changed in it to make it correct? 

// My answer
// This sequence can not be considered correct becouse of brackets are not properly balanced or nested.
// We need to add or erase some of brackets, on example form "[((())()(())]]" to  "[[(())()(())]]"
 