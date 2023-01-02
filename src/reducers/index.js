import initialState from '~store/initialState';

import calculatorReducer from './calculator';
import historyReducer from './history';

const rootReducer = (state = initialState, action) => ({
    calculator: calculatorReducer(state.calculator, action, state),
    history: historyReducer(state, action),
});
export default rootReducer;
