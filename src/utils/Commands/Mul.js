import Command from './index';

function mul(x, y) {
    return x * y;
}

const MulCommand = function (leftOperand, rightOperand) {
    return new Command(mul, leftOperand, rightOperand);
};
export default MulCommand;
