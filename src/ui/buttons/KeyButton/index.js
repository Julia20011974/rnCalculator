import React from 'react';

import {ButtonContainer, ButtonText} from './styles';

export const KeyButton = ({
    value,
    valueColor,
    bgColor,
    width,
    height,
    onPress,
}) => {
    return (
        <ButtonContainer
            bgColor={bgColor}
            width={width}
            height={height}
            onPress={onPress}>
            <ButtonText valueColor={valueColor}>{value}</ButtonText>
        </ButtonContainer>
    );
};
