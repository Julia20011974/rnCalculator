import React, {useCallback, useLayoutEffect} from 'react';
import {connect} from 'react-redux';

import {HISTORY} from '~constants';
import Calculator from '~layouts/Calculator';
import {getTheme} from '~selectors';
import {GearsIcon} from '~ui/icons';

const mapStateToProps = state => ({
    theme: getTheme(state),
});

const CalculatorScreen = ({navigation, theme}) => {
    const handlePressGeers = useCallback(
        () => navigation.navigate(HISTORY),
        [navigation],
    );

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <GearsIcon
                    color={theme.iconsColor}
                    onPress={handlePressGeers}
                />
            ),
            headerStyle: {backgroundColor: theme.bgColor},
            headerTintColor: theme.headerTitleColor,
        });
    }, [navigation, handlePressGeers, theme]);

    return <Calculator />;
};
export default connect(mapStateToProps)(CalculatorScreen);
