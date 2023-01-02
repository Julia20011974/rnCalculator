import Command from './index';

function sub(x, y) {
    return x - y;
}

const SubCommand = function (leftOperand, rightOperand) {
    return new Command(sub, leftOperand, rightOperand);
};
export default SubCommand;
