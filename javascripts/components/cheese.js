import utilities from '../helpers/utilities.js';

const cheeseCollection = [
    {
        id: 'cheese1',
        name: 'swiss',
        price: 50,
    },
    {
        id: 'cheese2',
        name: 'gouda',
        price: 60,
    },
    {
        id: 'cheese3',
        name: 'cheddar',
        price: 600,
    },
    {
        id: 'cheese4',
        name: 'provolone',
        price: 500,
    },
]

const cheese = () => {
    let domString = '';
    for (let i=0; i < cheeseCollection.length; i++) {
        domString +=
        `<div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="${cheeseCollection[i].id}">
            <label class="form-check-label" for="${cheeseCollection[i].id}">${cheeseCollection[i].name}</label>
        </div>`;
    }

    utilities.printToDOM('cheeseCounter', domString);
}

export default{ cheese };