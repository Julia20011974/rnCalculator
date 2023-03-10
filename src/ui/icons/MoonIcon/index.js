import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const MoonIcon = ({onPress, color}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon name="moon-waxing-crescent" size={32} color={color} />
        </TouchableOpacity>
    );
};
