
/*Exercise 1:
Make an array of numbers that are doubles of the first array */

function doubleNumbers(numbers){
    let doubleArray=numbers.map(value=>value*2);
    return doubleArray;
}

console.log(doubleNumbers([2, 5, 100]));


/*Exercise 2 :
Take an array of numbers and make them strings*/

function stringItUp(number){
    let numToString=number.map(value=>String(value));
    return numToString;
}
console.log(stringItUp([2, 5, 100]));



/*Exercise 3:  
Capitalize each of an array of names
*/
function capitalizeNames(arr) {
    let capitalizeArray = arr.map(element => element.charAt(0).toUpperCase() + element.slice(1).toLowerCase());
    return capitalizeArray;
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));



/*Exercise 4:
Make an array of strings of the names
*/
function namesOnly(arr){
    let namesOnlyArray=arr.map(arr=>arr.name);
    return namesOnlyArray;
}

console.log(namesOnly([
   {
       name: "Angelina Jolie",
       age: 80
   },
   {
       name: "Eric Jones",
       age: 2
   },
   {
       name: "Paris Hilton",
       age: 5
   },
   {
       name: "Kayne West",
       age: 16
   },
   {
       name: "Bob Ziroll",
       age: 100
   }
   ])); 


/*Exercise 5:
Make an array of strings of the names saying whether or not they can go to The Matrix 
*/
   function makeStrings(arr){
    let stringsMatrix=arr.map(arr=> {
        if (arr.age>50)
        {
            return arr.name+ " can go to The Matrix";
        }
        else{return arr.name+ " is under age!!";}
    });
    return stringsMatrix;
   }

   console.log(makeStrings([
        {
           name: "Angelina Jolie",
           age: 80
       },
       {
           name: "Eric Jones",
           age: 2
       },
       {
           name: "Paris Hilton",
           age: 5
       },
       {
           name: "Kayne West",
           age: 16
       },
       {
           name: "Bob Ziroll",
           age: 100
       }
     ]));  
   



    /* Exercise 6: 
    Make an array of the names in h1s, and the ages in h2s
*/
     function readyToPutInTheDOM(arr){
        let readyToPutInTheDOMArray=arr.map(arr=> `<h1> ${arr.name}</h1><h2>${arr.age}</h2>`)
        return readyToPutInTheDOMArray;
     }

     console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
    ])); 



    /*Exercise 7:
    Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
    */
    function doubleValues(arr){
        let doubleArray=arr.map(arr=>arr*2);
        return doubleArray;
    }

    console.log(doubleValues([1,2,3]));
    console.log(doubleValues([1,-2,-3]));



    /*Exercise 8:
    Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
    */
    function valTimesIndex(arr){
        let arrTimesIndex=arr.map((value,index)=> value*index);
        return arrTimesIndex;
    }

    console.log(valTimesIndex([1,2,3]));
    console.log(valTimesIndex([1,-2,-3]));



/*Exercise 9:
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
of that key in each object.
   */  
function extractKey(arr,key){
        let resultArray=arr.map(arr=>arr[key]);
        return resultArray;
    }

    console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') );



   /* Ex10:
*/
    function extractFullName(arr){
        let ArrayFullName=arr.map(arr=>`${arr.first} ${arr.last}`);
        return ArrayFullName;
    }

    console.log(extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]));
    
