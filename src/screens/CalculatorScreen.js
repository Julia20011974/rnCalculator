import React, {useCallback, useLayoutEffect} from 'react';

import {HISTORY} from '~constants';
import Calculator from '~layouts/Calculator';
import {GearsIcon} from '~ui/icons';

const CalculatorScreen = ({navigation}) => {
    const handlePressGeers = useCallback(
        () => navigation.navigate(HISTORY),
        [navigation],
    );

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <GearsIcon onPress={handlePressGeers} />,
            headerStyle: {backgroundColor: '#17181A'},
            headerTintColor: '#fff',
        });
    }, [navigation, handlePressGeers]);

    return <Calculator />;
};
export default CalculatorScreen;
