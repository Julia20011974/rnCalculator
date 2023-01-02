import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export const CrossIcon = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon name="cross" size={40} color="#FF0000" />
        </TouchableOpacity>
    );
};
