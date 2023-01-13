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

let countEl = document.getElementById("count-el")
console.log(countEl)  //will show up as an HTML element in console

let count = 0;

function increment () {
    // listen for clicks on the increment button
    console.log('button was clicked')
    count = count + 1 //// increment the count variable when the button is clicked
    countEl.innerText = count;
    console.log(count)
}


