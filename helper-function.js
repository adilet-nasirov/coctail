import {
    getData
} from "./getData.js"

export const filterCoctails = (searchedName) => {
    const data = getData()
    const filteredData = []
    for (let i = 0; i < data.length; i++) {
        const drinkName = data[i].strDrink.toLowerCase()

        if (drinkName.includes(searchedName.toLowerCase())) {
            filteredData.push(data[i])
        } else {
            const error = document.querySelector('.error').innerText = "There's no matching cocktail!"
            const errorDisapear = setTimeout(function () {
                const error = document.querySelector('.error').innerText = ""
            }, 1500)
            const drinksUI = document.querySelector('.drinksUI').innerHTML = ""
        }
    }
    return filteredData
}