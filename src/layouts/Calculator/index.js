import React from 'react';
import {connect} from 'react-redux';
import {Container} from 'theme';

import {Display} from '~components/Display';
import Keypad from '~components/Keypad';
import {getDisplayAnswer, getDisplayValue, getTheme} from '~selectors';

const mapStateToProps = state => ({
    displayValue: getDisplayValue(state),
    displayAnswer: getDisplayAnswer(state),
    theme: getTheme(state),
});

const Calculator = ({displayValue, displayAnswer, theme}) => {
    return (
        <Container bgColor={theme.bgColor}>
            <Display
                value={displayValue}
                answer={displayAnswer}
                theme={theme}
            />
            <Keypad displayValue={displayValue} theme={theme} />
        </Container>
    );
};
export default connect(mapStateToProps)(Calculator);
