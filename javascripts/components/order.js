import cheese from './cheese.js';
import utilities from '../helpers/utilities.js';

const createFinalOrder = (items) => {
    let domString2 = '';
    for (let i=0; i<items.length; i++) {
        domString2 += `
        <h2>${items[i].name}</h2>
        `
    }
    utilities.printToDOM('finalOrder', domString2);
}

const createOrderEvent = () => {
    const selectedCheeses = cheese.getSelectedCheeses();
    // const selectedMeats = meat.getSelectedMeats();
    createFinalOrder(selectedCheeses);
}

const printOrderButton = () => {
    const domString = '<button id="orderButton" class="btn btn-primary">Make Pizza</button>';
    utilities.printToDOM('finalOrder', domString);
    document.getElementById('orderButton').addEventListener('click', createOrderEvent);
}

export default{ printOrderButton };