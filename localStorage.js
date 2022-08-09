'use strict';

console.log(localStorage);


//1. i want to do clear method 
// // clear() :it will clear the data from the local storage

localStorage.clear();   //or press x or no at the storage 

//-----------------------------------------



//2. setItem : it will save the data in the local storage in the shape of key value pairs

localStorage.setItem("name", "ahmad");  // it will save name as a key and ahmad as a value

localStorage.setItem("gender", "male");

localStorage.setItem("name", "qais"); // it will delete the old value for key name and it will give it new value

//the key should be unique and refer to one data


//----------------------------------------



//3. getItem()

let userName = localStorage.getItem("name");   //it will return for me string ahmad or null 


console.log(userName);
//(i have to give it the key and it will return me the value of this key (ahmad))

let userGender = localStorage.getItem("gender");
console.log(userGender);


let userGrade = localStorage.getItem("grade");
console.log(userGrade);

//-----------------------------------------


//4. removeItem() it will remove one item

localStorage.removeItem("name");  //i have to provide it with its key




















