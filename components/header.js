import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function HeaderC({navigation}) {
    return (
        <View style={styles.headerC}>
            <View style={styles.items}>
            <TouchableOpacity style={styles.open}
            onPress={()=>{navigation.openDrawer()}}
            >
                <FontAwesome size={32} color="white" name="bars"/>
            </TouchableOpacity>
                <Text style={styles.text}>Review app</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerC: {
        width: "100%",
        height: "10%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        backgroundColor: "#1a75ff",
        borderBottomLeftRadius: 7,
        borderBottomEndRadius: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        paddingTop:15,
    },
    text: {
        fontSize: 23,
        fontWeight: "600",
        color:"white",
    },
    open: {
        position: "absolute",
        left: "5%",
        
    },
    items:{
        width:"90%",
        alignItems: "center",
    }
})
