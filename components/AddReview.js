import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import HeaderC from './header';
import { globalStyles } from '../styles/global';


export default function AddReview({ addReviews }) {
    const [review, setReview] = useState({
        title: "",
        body: "",
        rating: "0",
        key:0
    })

    const setReviewState = () => {
        addReviews(review);
        console.log(review);
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={globalStyles.container}>
                <Text style={styles.titleText}>Add review</Text>
                <View style={styles.container}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput onChangeText={(text) => { setReview({ ...review, title: text }) }} value={review.title}
                        style={styles.input}
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.label}>Body</Text>
                    <TextInput onChangeText={(text) => { setReview({ ...review, body: text }) }} value={review.body}
                        style={styles.input}
                        multiline
                        numberOfLines={5}
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.label}>Rating</Text>
                    <TextInput keyboardType="numeric" onChangeText={(text) => { setReview({ ...review, rating: text }) }} value={review.rating.toString()}
                        style={styles.input}
                        placeholder="1-5"
                         />
                </View>
                <TouchableOpacity onPress={setReviewState} style={styles.button}>
                    <Text style={styles.buttonText}>Add Review</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    input: {
        width: "80%",
        minHeight: 50,
        borderRadius: 40,
        borderColor: "#1a75ff",
        borderWidth: 3,
        marginTop: 5,
        textAlign: "center",
        fontWeight: "500",
        fontSize: 19,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    container: {
        width: "100%",
        textAlign: "center",
        marginTop: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        fontSize: 21,
        fontWeight: "600",
    },
    titleText: {
        fontSize: 23,
        fontWeight: "600",
        width: "100%",
        textAlign: "center",
        borderColor: "transparent",
        borderBottomColor: "#1a75ff",
        borderWidth: 3,
    },
    button: {
        height: 49,
        width: 190,
        borderRadius: 26,
        borderWidth: 2,
        borderColor: "#0099ff",
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "500",
    }
})
