import {
    data
} from './getData.js'

export const filtered = (searchedName) => {
    const arr = data();
    const filteredCoctails = [];
    for (let el of arr) {
        let nameOfCoctail = el.strDrink.toLowerCase();
        if (nameOfCoctail.includes(searchedName.toLowerCase())) {
            filteredCoctails.push(el);
        }
    }

    return filteredCoctails

}