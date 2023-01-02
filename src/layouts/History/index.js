import React from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Container} from 'theme';

import {historyClearExpression} from '~actions';
import Label from '~components/Label';
import {getHistory, getTheme} from '~selectors';

const mapStateToProps = state => ({
    history: getHistory(state),
    theme: getTheme(state),
});

const mapDispatchToProps = dispatch => ({
    _onPressCross: id => dispatch(historyClearExpression(id)),
});

const History = ({history, _onPressCross, theme}) => {
    const _onPress = id => () => {
        _onPressCross(id);
    };

    return (
        <Container bgColor={theme.bgColor}>
            <ScrollView>
                {history.map(({id, expression}) => (
                    <Label
                        key={id}
                        color={theme.historyTextColor}
                        expression={expression}
                        onPress={_onPress(id)}
                    />
                ))}
            </ScrollView>
        </Container>
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(History);
