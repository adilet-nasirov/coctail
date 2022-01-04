import { clearBox } from "./main";
import { data } from "./getData";
const dataDr = data();

export function showOnModal(event) {
  const imgModal = document.querySelector(".imgModal");
  const infoModal = document.querySelector(".infoModal");
  const btnModal = document.querySelector(".btnModal");
  const nameOfCocModel = document.querySelector(".nameOfCoctail");
  const pModel = document.querySelector(".instruction");
  const table = document.querySelector(".tableModal");
  const imgLink = event.target.currentSrc;
  for (let el of dataDr) {
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
}
