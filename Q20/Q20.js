// 20. Dynamically Adding List Items to an Ordered List

// Visit page and look for “What you'll learn” section. 
// The section consists of a list of information on what you will be learning in the course. You are required to write 
// a JavaScript program that stores a pre-existing array of list items. On each button click, the program should 
// add a new list item in sequential order. The program should verify if any remaining items are available in the list 
// item array and add the next item to the list accordingly. If no items are left, the function should display a 
// message indicating that all items have been added. 

// Pre-existing array of list items
var learningItems = [
    "Item 1: Topic 1",
    "Item 2: Topic 2",
    "Item 3: Topic 3",
    // Add more items as needed
];

var currentIndex = 0;
var learningList = document.getElementById('learningList');

// Function to add a new item to the list
function addItem() {
    if (currentIndex < learningItems.length) {
        var newItem = document.createElement('li');
        newItem.textContent = learningItems[currentIndex];
        learningList.appendChild(newItem);
        currentIndex++;
    } else {
        alert("All items have been added.");
    }
}