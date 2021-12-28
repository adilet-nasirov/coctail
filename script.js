'use strict'
import {
    getData
} from "./getData.js"
import {
    filterCoctails
} from "./helper-function.js"
const data = getData() //brought the array of objects 
const container = document.querySelector(".container")
const input = document.querySelector("input")
const button = document.querySelector("button")
const drinksUI = document.querySelector('.drinksUI')


console.log(data, "this is data")


// showing the all drinks 
const allDrinks = () => {
    for (let i = 0; i < data.length; i++) {
        const drinksUI = document.querySelector('.drinksUI')
        const divDrinks = document.createElement('div')
        const paragraph = document.createElement('p')
        const myImg = document.createElement('img')
        const aTag = document.createElement('a')
        paragraph.innerHTML = data[i].strDrink
        myImg.src = data[i].strDrinkThumb
        divDrinks.className = 'drinks-show'
        myImg.className = "image"
        paragraph.className = 'drink-name'
        aTag.className = 'linkTag'
        aTag.appendChild(paragraph)
        aTag.appendChild(myImg)
        divDrinks.appendChild(aTag)
        drinksUI.appendChild(divDrinks)

        console.log(data[i].strDrink, data[i].strDrinkThumb);
    }
}
allDrinks()
// this is for search each drink 
const handleClick = () => {
    const searchedCocktail = input.value;
    const filteredCocktailArray = filterCoctails(searchedCocktail)
    for (let i = 0; i < filteredCocktailArray.length; i++) {
        const divDrinks = document.createElement('div')
        const paragraph = document.createElement("p")
        const myImg = document.createElement("img")
        myImg.src = filteredCocktailArray[i].strDrinkThumb
        divDrinks.className = 'drinks-show'
        myImg.className = "image"
        paragraph.className = 'drink-name'
        paragraph.innerHTML = filteredCocktailArray[i].strDrink
        divDrinks.appendChild(paragraph)
        divDrinks.appendChild(myImg)
        drinksUI.appendChild(divDrinks)
        console.log(filteredCocktailArray[i].strDrink)
    }
}

button.addEventListener("click", handleClick)


// clickable image and text for chosen cocktail(s)
const imageClick = (event) => {



}




/* for (let i = 0; i < data.length; i++) {
    const paragraph = document.createElement("p")
    const myImg = document.createElement("img")
    myImg.src = data[i].strDrinkThumb
    myImg.className = "image"
    paragraph.innerHTML = data[i].strDrink
    container.appendChild(paragraph)
    container.appendChild(myImg)
    console.log(data[i].strDrink)
} */