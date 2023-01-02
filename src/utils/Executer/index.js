const Executer = function () {
    return {
        execute: function (command) {
            return command.execute(command.leftOperand, command.rightOperand);
        },
    };
};
export default Executer;
