import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const TrashIcon = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon name="trash-can" size={32} color="#fff" />
        </TouchableOpacity>
    );
};
