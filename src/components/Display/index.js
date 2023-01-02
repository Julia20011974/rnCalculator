import React, {useMemo} from 'react';

import {DisplayContainer, TextAnswer, TextOperation} from './styles';

export const Display = ({value, answer}) => {
    const fontSize = useMemo(() => (answer ? 24 : 48), [answer]);

    return (
        <DisplayContainer>
            <TextOperation fontSize={fontSize}>{value}</TextOperation>
            {answer ? <TextAnswer>{answer}</TextAnswer> : null}
        </DisplayContainer>
    );
};
