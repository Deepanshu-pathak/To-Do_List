let inputbx = document.querySelector('#inputbx');
let list = document.querySelector('#list');

// toggle button for dark mode
const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');
toggle.onclick = function(){
    toggle.classList.toggle('switch');
    body.classList.toggle('switch');
}

inputbx.addEventListener("keyup", function(event){
    if (event.key == "Enter"){
        addItem(this.value);
        this.value = "";
    }
})

let addItem = (inputbx) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputbx}<p></p>`;
    listItem.addEventListener("click", function(){
        this.classList.toggle('done');
    })
    listItem.querySelector("p").addEventListener("click", function(){
        listItem.remove();
    })
    list.prepend(listItem);
}
