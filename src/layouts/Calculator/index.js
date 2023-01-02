import React from 'react';
import {connect} from 'react-redux';
import {Container} from 'theme';

import {Display} from '~components/Display';
import Keypad from '~components/Keypad';
import {getDisplayAnswer, getDisplayValue} from '~selectors';

const mapStateToProps = state => ({
    displayValue: getDisplayValue(state),
    displayAnswer: getDisplayAnswer(state),
});

const Calculator = ({displayValue, displayAnswer}) => {
    return (
        <Container>
            <Display value={displayValue} answer={displayAnswer} />
            <Keypad displayValue={displayValue} />
        </Container>
    );
};
export default connect(mapStateToProps)(Calculator);
