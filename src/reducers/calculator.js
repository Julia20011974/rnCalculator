import {
    CALCULATOR_CLEAR_ALL,
    CALCULATOR_CLEAR_KEY,
    CALCULATOR_EQUAL,
    CALCULATOR_UPDATE_DISPLAY,
} from '~constants';
import {clearKey, updateDisplayValue} from '~helpers';

const calculatorReducer = (calculator, action) => {
    switch (action.type) {
        case CALCULATOR_CLEAR_ALL:
            return {
                displayValue: '0',
                displayAnswer: '',
            };
        case CALCULATOR_CLEAR_KEY:
            return {
                displayValue: clearKey(calculator.displayValue),
                displayAnswer: '',
            };
        case CALCULATOR_EQUAL:
            return {
                displayValue: calculator.displayValue,
                displayAnswer: '=' + action.payload.displayAnswer,
            };
        case CALCULATOR_UPDATE_DISPLAY:
            return {
                displayValue: updateDisplayValue(
                    calculator.displayValue,
                    action.payload.value,
                ),
                displayAnswer: '',
            };
        default:
            return calculator;
    }
};
export default calculatorReducer;
