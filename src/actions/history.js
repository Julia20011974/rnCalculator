import {
    HISTORY_ADD,
    HISTORY_CLEAR_ALL,
    HISTORY_CLEAR_EXPRESSION,
} from '~constants';

let nextId = 0;

export const historyAdd = () => ({
    type: HISTORY_ADD,
    payload: {
        id: nextId++,
    },
});

export const historyClearAll = () => ({
    type: HISTORY_CLEAR_ALL,
});

export const historyClearExpression = id => ({
    type: HISTORY_CLEAR_EXPRESSION,
    payload: {
        id,
    },
});
