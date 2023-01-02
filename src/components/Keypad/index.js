import React from 'react';
import {connect} from 'react-redux';

import {
    calculatorClearAll,
    calculatorClearKey,
    calculatorEqual,
    calculatorUpdateDisplay,
    historyAdd,
} from '~actions';
import {leftKeyMap, Operations, rightKeyMap} from '~constants';
import {KeyButton} from '~ui/buttons/KeyButton';

import {KeypadContainer, LeftButtons, RightButtons} from './styles';

export const mapDispatchToProps = dispatch => ({
    _onPressKeyButton: value => dispatch(calculatorUpdateDisplay(value)),
    _onPressKeyClearButton: () => dispatch(calculatorClearKey()),
    _onPressKeyClearAllButton: () => dispatch(calculatorClearAll()),
    _onPressKeyEqualButton: () => dispatch(calculatorEqual()),
    _onPressAddHistory: () => dispatch(historyAdd()),
});

const Keypad = ({
    _onPressKeyButton,
    _onPressKeyClearButton,
    _onPressKeyClearAllButton,
    _onPressKeyEqualButton,
    _onPressAddHistory,
}) => {
    const _onPress = value => () => {
        switch (value) {
            case Operations.ClearAll:
                _onPressKeyClearAllButton();
                break;
            case Operations.Clear:
                _onPressKeyClearButton();
                break;
            case Operations.Equal:
                _onPressKeyEqualButton();
                _onPressAddHistory();
                break;
            default:
                _onPressKeyButton(value);
        }
    };

    return (
        <KeypadContainer>
            <LeftButtons>
                {leftKeyMap.map(item => (
                    <KeyButton
                        key={item.value}
                        {...item}
                        onPress={_onPress(item.value)}
                    />
                ))}
            </LeftButtons>
            <RightButtons>
                {rightKeyMap.map(item => (
                    <KeyButton
                        key={item.value}
                        {...item}
                        onPress={_onPress(item.value)}
                    />
                ))}
            </RightButtons>
        </KeypadContainer>
    );
};
export default connect(null, mapDispatchToProps)(Keypad);
