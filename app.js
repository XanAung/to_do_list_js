let ul = document.querySelector("ul");
let input = document.querySelector("input");
let btn = document.querySelector("#enter");

function setList() {
    let li = document.createElement("li"); // create li element
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""; // reset the input

    let deleteBtn = document.createElement("button"); // create delete button
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);

    function deleteList() {
        li.classList.add("delete");
    }
    deleteBtn.addEventListener("click", deleteList);

    li.addEventListener("click", function() {
        li.classList.toggle("done");
    });
}

function clickToAdd() {
    if(input.value.length > 0) {
        setList();
    }
}

btn.addEventListener("click", clickToAdd); 
input.addEventListener("keypress", function(event) { // after hit enter button
    if(input.value.length > 0 && event.which === 13) {
        setList();
    }
});
