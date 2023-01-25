//document.getElementById("count-el").innertext = 5;

// let count = 5;
// count = 3;
// count = count + 2;
// console.log(count)
//JS runs from top down

//Pseudocode 
// initialize count to 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count  

// initialize count to 0
// let count = 0;

// function increment () {
//     // listen for clicks on the increment button
//     console.log('button was clicked')
//     count = count + 1 //// increment the count variable when the button is clicked
//     console.log(count)
// }

// change the count-el in the HTML to reflect the new count - work with the DOM

// let countEl = document.getElementById("count-el")
// //console.log(countEl)  //will show up as an HTML element in console

// let count = 0;

// function increment () {
//     // listen for clicks on the increment button
//     //console.log('button was clicked')
//     count = count + 1 //// increment the count variable when the button is clicked
//     countEl.innerText = count;
//     //console.log(count)
// }

// 1. Create a function, save(), which logs out the count when it's called

// function save() {
//     console.log(count)
// }
//1. Initialize the save-el paragraph and store in var called saveEl

let saveEl = document.getElementById("save-el");
console.log(saveEl);
let countEl = document.getElementById("count-el");
let count = 0;

function increment () {
    //change to plus equal technique
    count += 1;
    countEl.textContent = count;
}

function save() {
    //2. Create a var that contains both the count and the dash separator
    let savedCount = count + " - ";

    //3. Render the var in saveEl using innerText without deleting exiting paragraph content
    //saveEl.innerText += savedCount; 
    saveEl.textContent += savedCount;
    console.log(savedCount)
    countEl.textContent = 0;
    count = 0;
}

// function reset() {
//     countEl.textContent = 0;
// }
//Google:
//suspect problem with spacing is with .innerText
// google innertext alternative MDN
// find .textContent --> sub for .innerText

//Next issue - reset incrementer to zero after each count
//

