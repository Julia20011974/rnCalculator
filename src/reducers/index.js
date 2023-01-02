import initialState from '~store/initialState';

import calculatorReducer from './calculator';
import historyReducer from './history';
import themeReducer from './theme';

const rootReducer = (state = initialState, action) => ({
    calculator: calculatorReducer(state.calculator, action, state),
    history: historyReducer(state, action),
    theme: themeReducer(state.theme, action),
});
export default rootReducer;
