export const Command = function (execute, leftOperand, rightOperand) {
    this.execute = execute;
    this.leftOperand = leftOperand;
    this.rightOperand = rightOperand;
};
export default Command;
