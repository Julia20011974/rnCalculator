import {
    HISTORY_ADD,
    HISTORY_CLEAR_ALL,
    HISTORY_CLEAR_EXPRESSION,
} from '~constants';

const historyReducer = (state, action) => {
    switch (action.type) {
        case HISTORY_ADD:
            return [
                ...state.history,
                {
                    ...action.payload,
                    expression: state.calculator.displayValue.concat(
                        state.calculator.displayAnswer,
                    ),
                },
            ];
        case HISTORY_CLEAR_EXPRESSION:
            return state.history.filter(item => item.id !== action.payload.id);
        case HISTORY_CLEAR_ALL:
            return [];
        default:
            return state.history;
    }
};
export default historyReducer;
