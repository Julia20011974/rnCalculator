import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

export const App = () => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    backgroundColor: 'red',
                    flex: 1,
                }}
            />
            <View
                style={{
                    backgroundColor: 'green',
                    flex: 1,
                }}
            />
            <View
                style={{
                    backgroundColor: 'darkorange',
                    flex: 1,
                }}
            />
            <Image
                source={{
                    uri: 'https://reactjs.org/logo-og.png',
                }}
                style={{width: 400, height: 400}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'aliceblue',
        minHeight: 200,
    },
});
