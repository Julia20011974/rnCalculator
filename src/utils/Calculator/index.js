import AddCommand from '~utils/Commands/Add';
import DivCommand from '~utils/Commands/Div';
import MulCommand from '~utils/Commands/Mul';
import SubCommand from '~utils/Commands/Sub';
import Executer from '~utils/Executer';

const Calculator = function (value) {
    let arr = [];
    const stack1 = [];
    const stack2 = [];
    let result = 0;

    function parsingStr() {
        arr = value.split(' ').map(item => {
            if (!isNaN(item)) {
                return Number(item);
            }
            return item;
        });
    }

    function getPriority(str) {
        if (str === '+' || str === '-') {
            return 1;
        }
        if (str === '*' || str === '/') {
            return 2;
        }
    }

    function stack(condition) {
        while (stack2[stack2.length - 1] !== condition) {
            action();
        }
        stack2.pop();
    }

    function action() {
        const executer = new Executer();
        const rightOperand = stack1.pop();
        const leftOperand = stack1.pop();
        const operator = stack2.pop();

        let tmpResult = 0;

        switch (operator) {
            case '+':
                tmpResult = executer.execute(
                    new AddCommand(leftOperand, rightOperand),
                );
                break;
            case '-':
                tmpResult = executer.execute(
                    new SubCommand(leftOperand, rightOperand),
                );
                break;
            case '*':
                tmpResult = executer.execute(
                    new MulCommand(leftOperand, rightOperand),
                );
                break;
            case '/':
                tmpResult = executer.execute(
                    new DivCommand(leftOperand, rightOperand),
                );
        }

        stack1.push(tmpResult);
    }

    function counting() {
        let i = 0;

        while (i !== arr.length) {
            while (typeof arr[i] === 'string') {
                if (arr[i] === ')') {
                    stack('(');
                    i++;
                    /// после выполнения скобок нужно проверить приоритет операций, прежде чем добавлять следующий оператор
                    while (
                        getPriority(arr[i]) <
                        getPriority(stack2[stack2.length - 1])
                    ) {
                        action();
                    }
                } else {
                    stack2.push(arr[i]);
                    i++;
                }
            }

            stack1.push(arr[i]);
            i++;

            if (stack2[stack2.length - 1] !== '(') {
                while (
                    getPriority(arr[i]) < getPriority(stack2[stack2.length - 1])
                ) {
                    action();
                }
            } else if (arr[i] !== ')') {
                stack2.push(arr[i]);
                i++;
            }
        }

        stack(undefined);
        result = stack1.pop();
    }

    return {
        calculate: function () {
            parsingStr();
            counting();
        },
        getResult: function () {
            return String(result);
        },
    };
};
export default Calculator;
