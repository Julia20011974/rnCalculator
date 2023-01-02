import Command from './index';

function div(x, y) {
    return x / y;
}

const DivCommand = function (leftOperand, rightOperand) {
    return new Command(div, leftOperand, rightOperand);
};
export default DivCommand;
