import React, {useMemo} from 'react';

import {DisplayContainer, TextAnswer, TextOperation} from './styles';

export const Display = ({value, answer, theme}) => {
    const fontSize = useMemo(() => (answer ? 24 : 48), [answer]);

    return (
        <DisplayContainer bgColor={theme.bgColor}>
            <TextOperation
                fontSize={fontSize}
                color={theme.primaryDisplayColor}>
                {value}
            </TextOperation>
            {answer ? (
                <TextAnswer color={theme.secondaryDisplayColor}>
                    {answer}
                </TextAnswer>
            ) : null}
        </DisplayContainer>
    );
};
