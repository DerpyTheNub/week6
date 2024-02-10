const userInputField = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const listOfItems = document.querySelector("#outputList");
let itemList = [];

addBtn.addEventListener("click", (event) => {
    if (userInputField.value != "") {
        itemList.push(userInputField.value);
    };

    const listLength = itemList.length;
    console.log(itemList);

    userInputField.value = "";
    event.preventDefault();
});