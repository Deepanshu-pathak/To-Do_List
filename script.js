let inputbx = document.querySelector('#inputbx');
let list = document.querySelector('#list');

// Load items from localStorage if available
const savedItems = JSON.parse(localStorage.getItem('items')) || [];

// Function to save the items to localStorage
function saveToLocalStorage() {
    localStorage.setItem('items', JSON.stringify(savedItems));
}

// Function to load items from localStorage and add them to the list
function loadFromLocalStorage() {
    for (const item of savedItems) {
        addItem(item);
    }
}

// toggle button for dark mode
const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');
toggle.onclick = function () {
    toggle.classList.toggle('switch');
    body.classList.toggle('switch');
};

// Event listener for Enter key
inputbx.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        const newItem = this.value;
        addItem(newItem);
        savedItems.push(newItem);
        saveToLocalStorage();
        this.value = "";
    }
});

// Function to add an item to the list
function addItem(inputbx) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputbx}<p></p>`;
    listItem.addEventListener("click", function () {
        this.classList.toggle('done');
    });
    listItem.querySelector("p").addEventListener("click", function () {
        listItem.remove();
        const itemIndex = savedItems.indexOf(inputbx);
        if (itemIndex > -1) {
            savedItems.splice(itemIndex, 1);
            saveToLocalStorage();
        }
    });
    list.prepend(listItem);
}

// Load items from localStorage when the page loads
loadFromLocalStorage();

