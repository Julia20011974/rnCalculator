import React, {useLayoutEffect} from 'react';
import {connect} from 'react-redux';

import {historyClearAll} from '~actions';
import {themeToggle} from '~actions/theme';
import History from '~layouts/History';
import {getTheme} from '~selectors';
import {MoonIcon, TrashIcon} from '~ui/icons';

const mapStateToProps = state => ({
    theme: getTheme(state),
});

const mapDispatchToProps = dispatch => ({
    _onPressTrash: () => dispatch(historyClearAll()),
    _onPressMoon: () => dispatch(themeToggle()),
});

const HistoryScreen = ({navigation, _onPressTrash, _onPressMoon, theme}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <>
                    <MoonIcon color={theme.iconsColor} onPress={_onPressMoon} />
                    <TrashIcon
                        color={theme.iconsColor}
                        onPress={_onPressTrash}
                    />
                </>
            ),
            headerStyle: {backgroundColor: theme.bgColor},
            headerTintColor: theme.headerTitleColor,
            headerBackVisible: false,
        });
    }, [navigation, _onPressTrash, _onPressMoon, theme]);

    return <History />;
};
export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen);
