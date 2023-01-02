import React, {useLayoutEffect} from 'react';
import {connect} from 'react-redux';

import {historyClearAll} from '~actions';
import History from '~layouts/History';
import {MoonIcon, TrashIcon} from '~ui/icons';

const mapDispatchToProps = dispatch => ({
    _onPressTrash: () => dispatch(historyClearAll()),
});

const HistoryScreen = ({navigation, _onPressTrash}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <>
                    <MoonIcon />
                    <TrashIcon onPress={_onPressTrash} />
                </>
            ),
            headerStyle: {backgroundColor: '#17181A'},
            headerTintColor: '#fff',
            headerBackVisible: false,
        });
    }, [navigation, _onPressTrash]);

    return <History />;
};
export default connect(null, mapDispatchToProps)(HistoryScreen);
