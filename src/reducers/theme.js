import {darkTheme, lightTheme} from 'theme';

import {THEME_TOGGLE} from '~constants';

const themeReducer = (theme, action) => {
    switch (action.type) {
        case THEME_TOGGLE:
            return theme === darkTheme ? lightTheme : darkTheme;
        default:
            return theme;
    }
};
export default themeReducer;
