
var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`];
var array = [1];
var myArray = [1, 2, 3];
var element = 'foo';

function addElementToBeginningOfArray(array, element) {
  return([element,...array]);
  };

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift('foo');
  return array;
  };

function addElementToEndOfArray(array, element){
  // takes two arguments
  // adds an element to the end of the array
  //Should not alter the original array
  return([...array, 'foo']);
}

function destructivelyAddElementToEndOfArray(array, element){
  /* takes two arguments
  adds an element to the end of the array
  Should alter the original array */
  array.push(element);
  return array;
}

function accessElementInArray(myArray, index){
  return (myArray[2]);
}

function destructivelyRemoveElementFromBeginningOfArray(myArray){
   myArray.shift();
   return myArray;
 }

function removeElementFromBeginningOfArray(myArray){
  myArray.slice(-2);
  return myArray;
}

function destructivelyRemoveElementFromEndOfArray(myArray){
   myArray.pop();
   return myArray;
 }
