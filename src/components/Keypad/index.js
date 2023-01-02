import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
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

import {
    AnimatedKeypad,
    KeypadContainer,
    LeftButtons,
    RightButtons,
} from './styles';

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
    const appearanceAnim = useRef(new Animated.Value(350)).current;

    useEffect(() => {
        Animated.timing(appearanceAnim, {
            toValue: 0,
            duration: 5000,
            useNativeDriver: false,
        }).start();
    }, [appearanceAnim]);

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
            <AnimatedKeypad style={{right: appearanceAnim}}>
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
            </AnimatedKeypad>
        </KeypadContainer>
    );
};
export default connect(null, mapDispatchToProps)(Keypad);
