import React from 'react';

import {CrossIcon} from '~ui/icons/CrossIcon';

import {ExpressionContainer, IconContainer, LabelContainer} from './styles';

const Label = ({expression, onPress, color}) => {
    return (
        <LabelContainer>
            <ExpressionContainer color={color}>
                {expression}
            </ExpressionContainer>
            <IconContainer>
                <CrossIcon onPress={onPress} />
            </IconContainer>
        </LabelContainer>
    );
};

export default Label;
