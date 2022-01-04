import {
    data
} from "./getData.js";
import {
    filtered
} from "./filter.js";
const dataDrinks = data();
//declaring variables from html
const container = document.querySelector(".container");
const input = document.querySelector("input");
const searchBar = document.querySelector(".search-bar");

window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});

showOnWindow(dataDrinks);

input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.key === "Enter") {
        const fArray = filtered(input.value);
        if (fArray.length > 0) {
            console.log(fArray);
            clearBox();
            showOnWindow(fArray);
        } else {
            clearBox();
            const msg = document.createElement("h2");
            msg.innerHTML = "No matching found";
            msg.className = "errorMsg";
            searchBar.appendChild(msg);
            setTimeout(() => {
                msg.innerHTML = "";
            }, 3000);
        }
    } else if (input.value === "") {
        clearBox();
        showOnWindow(dataDrinks);
    }
});

// clear function

const clearBox = () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
};

// shows on window
function showOnWindow(array) {
    for (let el of array) {
        const img = document.createElement("img");
        const div = document.createElement("div");
        const name = document.createElement("h3");
        name.innerHTML = el.strDrink;
        img.src = el.strDrinkThumb;
        div.appendChild(img);
        div.appendChild(name);
        container.appendChild(div);
    }
}

//modal window codes
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
// const btnOpenModals = document.querySelectorAll(".show-modal");

const closeModal = function () {
    modal.classList.add("hide");
    overlay.classList.add("hide");
    modal.classList.remove("location");
    showOnWindow(dataDrinks);
};

// creating elements in modal window
const imgModal = document.querySelector(".imgModal");
const infoModal = document.querySelector(".infoModal");
const btnModal = document.querySelector(".btnModal");
const nameOfCocModel = document.querySelector(".nameOfCoctail");
const pModel = document.querySelector(".instruction");
const table = document.querySelector(".tableModal");

//Showing drinks info in popupWindow
const showOnModal = (event) => {
    const imgLink = event.target.currentSrc;
    for (let el of dataDrinks) {
        //finding drink with clicked imagelink
        if (el.strDrinkThumb === imgLink) {
            console.log(el);
            modal.classList.remove("hide");
            overlay.classList.remove("hide");
            modal.classList.add("location");
            imgModal.src = el.strDrinkThumb;
            nameOfCocModel.innerHTML = el.strDrink;
            pModel.innerHTML = el.strInstructions;
            while (table.firstChild) {
                table.removeChild(table.firstChild);
            }
            clearBox();
            //getting ingredients for the drink
            for (let key in el) {
                if (key.includes("Ingredient")) {
                    console.log(key, el[key]);
                    const tr = document.createElement("tr");
                    tr.className = "back";
                    const td1 = document.createElement("td");
                    td1.className = "back";
                    const td2 = document.createElement("td");
                    td2.className = "back";
                    td1.innerHTML = '<i class="fas fa-check-circle back"></i>';
                    td2.innerHTML = el[key];
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    table.appendChild(tr);
                }
            }
        }
    }
};
// closing popup window and overlay
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modal.classList.contains("hide")) {
        closeModal();
        showOnWindow(dataDrinks);
    }
});
//calling function when clicked on image
container.addEventListener("click", showOnModal);