import utilities from '../helpers/utilities.js';

const cheese = () => {
    let domString = 'cheese';
    utilities.printToDOM('cheeseCounter', domString);
}

export default{ cheese };