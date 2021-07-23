import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {globalStyles} from '../styles/global';
import HeaderC from './header';

export default function About({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <HeaderC  navigation={navigation}/>
            <Text style={globalStyles.titleText}>About</Text>
        </View>
    )
}
