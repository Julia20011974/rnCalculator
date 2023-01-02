import {
    CALCULATOR_CLEAR_ALL,
    CALCULATOR_CLEAR_KEY,
    CALCULATOR_EQUAL,
    CALCULATOR_UPDATE_DISPLAY,
} from '~constants';

export const calculatorClearAll = () => ({
    type: CALCULATOR_CLEAR_ALL,
});

export const calculatorClearKey = () => ({
    type: CALCULATOR_CLEAR_KEY,
});

export const calculatorEqual = displayAnswer => ({
    type: CALCULATOR_EQUAL,
    payload: {
        displayAnswer,
    },
});

export const calculatorUpdateDisplay = value => ({
    type: CALCULATOR_UPDATE_DISPLAY,
    payload: {
        value,
    },
});
