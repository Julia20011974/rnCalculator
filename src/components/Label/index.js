import React from 'react';

import {CrossIcon} from '~ui/icons/CrossIcon';

import {ExpressionContainer, IconContainer, LabelContainer} from './styles';

const Label = ({expression, onPress}) => {
    return (
        <LabelContainer>
            <ExpressionContainer>{expression}</ExpressionContainer>
            <IconContainer>
                <CrossIcon onPress={onPress} />
            </IconContainer>
        </LabelContainer>
    );
};

export default Label;
