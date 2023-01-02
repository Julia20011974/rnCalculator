import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Provider} from 'react-redux';

import {CALCULATOR, HISTORY} from '~constants';
import CalculatorScreen from '~screens/CalculatorScreen';
import HistoryScreen from '~screens/HistoryScreen';
import store from '~store';

const Stack = createNativeStackNavigator();

export const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={CALCULATOR}>
                    <Stack.Screen
                        name={CALCULATOR}
                        component={CalculatorScreen}
                    />
                    <Stack.Screen name={HISTORY} component={HistoryScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};
