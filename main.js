let variable_deletAll = 0;
let ul = document.querySelector("ul.list-group");
let hr = document.querySelector("#that")
let li = document.querySelectorAll("li#li")
let input_text = document.querySelector("input");
let icon_close = document.querySelector("i.fa.fa-close")
let butonlar = document.querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault()
})

function add() {
    if (input_text.value.trim()) {
        let liste_item = document.createElement("li");
        let i = document.createElement("i");
        liste_item.className = "list-group-item d-flex justify-content-between align-items-center";
        i.className = "fa fa-close";
        i.style.color = "blue";
        i.addEventListener("click",deleteListItem)
        liste_item.textContent = input_text.value;
        liste_item.appendChild(i);
        ul.appendChild(liste_item);
        input_text.value = "";
    }

}
icon_close.addEventListener("click",deleteListItem)
function deleteListItem(){
    //get the parent of the span (li) 
    let listItem = this.parentNode;
    //get the parent of the list item (ul)
    let list = listItem.parentNode;
    //remove the child from the list         
    list.removeChild(listItem);
}
function deletee(){
    deleteAll(ul)
}
function deleteAll(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}