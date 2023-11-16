/* Exercise 1:
 Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled */
function doubleValues(arr){
    let doubleArray=[];
    arr.forEach(values => {
        doubleArray.push(values*2);
    });
    return doubleArray;
}

console.log(doubleValues([1,2,3]));
console.log(doubleValues([5,1,2,3,10]));




/* Exercise 2:
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function*/
function onlyEvenValues(arr){
    let EvenArray=[];
    arr.forEach(values => {
        if(values%2==0)
        {
            EvenArray.push(values);
        }
        
    });
    return EvenArray;
}

console.log(onlyEvenValues([1,2,3]));
console.log(onlyEvenValues([5,1,2,3,10]));



/* Exercise 3:
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.*/
function showFirstAndLast(arr){
    let FirstAndLastArray=[];
    arr.forEach(element => {
        FirstAndLastArray.push(element[0]+element[element.length-1]);
    });
    return FirstAndLastArray;
}

console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy']));
console.log(showFirstAndLast(['hi', 'goodbye', 'smile']));



/* Exercise 4:
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed 
 to the function with the new key and value added for each object */

function addKeyAndValue(arr,key,value){
    arr.forEach(obj => {
    obj[key]=value;
    });
    return arr;
}

console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'));



/* Exercise 5:
 Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the 
values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count*/

