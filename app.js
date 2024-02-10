const userInputField = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const groceryList = document.querySelector(".outputList");
const page = document.querySelector(".page");
let groceryListArray = [];

addBtn.addEventListener("click", (event) => {
    const grocery = userInputField.value;

    if (grocery != "") {
        groceryListArray.push(grocery);
        console.log(`Successfully added ${grocery}!`);
    } else {
        console.log("Input can not be empty!");
    };

    groceryList.innerHTML = "";

    groceryListArray.forEach(item => {
        const groceryListElement = document.createElement("li");
        groceryListElement.innerText = item;
        groceryList.appendChild(groceryListElement);
    });

    userInputField.value = "";
    event.preventDefault();
});