import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation, route }) {
    const { title , body } = route.params;

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>{title}</Text>
            <Text style={globalStyles.titleText}>{body}</Text>
        </View>
    )
}