import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const GearsIcon = ({onPress, color}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon name="gears" size={32} color={color} />
        </TouchableOpacity>
    );
};
