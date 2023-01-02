import Command from './index';

function add(x, y) {
    return x + y;
}

const AddCommand = function (leftOperand, rightOperand) {
    return new Command(add, leftOperand, rightOperand);
};
export default AddCommand;
