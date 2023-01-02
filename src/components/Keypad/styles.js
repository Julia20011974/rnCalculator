import {Animated} from 'react-native';
import styled from 'styled-components';

export const KeypadContainer = styled.View`
    flex: 2;
    margin: 0 auto;
    width: 308px;
`;

export const AnimatedKeypad = styled(Animated.View)`
    flex: 1;
    position: relative;
    top: 0;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const LeftButtons = styled.View`
    width: 226px;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-between;
`;

export const RightButtons = styled.View`
    width: 62px;
    flex-direction: column;
    justify-content: space-between;
`;
