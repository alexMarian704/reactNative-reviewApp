import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
import HeaderC from './header';
import AddReview from './AddReview';
import { FontAwesome } from '@expo/vector-icons';

export default function Home({ navigation }) {
    const [openModal, setOpenModal] = useState(false);

    const [reviews, setReviews] = useState([
        { title: 'asdasd skd asdnasdna', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'asdsahjdb abd uasbdj asbdjhaa sds dasdas dsad asd asd asd', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'asdjasnbd jasnjkandwqu', rating: 3, body: 'lorem ipsum', key: '3' },
        { title: 'asdjasnbd jasnjkandwqu', rating: 3, body: 'lorem ipsum', key: '5' },
        { title: 'asdjasnbd jasnjkandwqu', rating: 3, body: 'lorem ipsum', key: '6' },
        { title: 'asdjasnbd jasnjkandwqu', rating: 3, body: 'lorem ipsum', key: '7' },
    ]);

    const addReviews = (review) => {
        let r = Math.random().toString(36).substring(7);
        console.log(r);
        review.key = r;
        setReviews((current)=>{
            return [review , ...current];
        });
        setOpenModal(false);
    }

    return (
        <View style={globalStyles.container}>
            <HeaderC navigation={navigation} />

            <Modal visible={openModal}
                animationType="slide"
            >
                <TouchableOpacity onPress={() => { setOpenModal(false) }}
                style={styles.closeModal}
                >
                    <FontAwesome size={32} name="close" color="black" />
                </TouchableOpacity>
                <AddReview addReviews={addReviews} />
            </Modal>

            <TouchableOpacity onPress={() => { setOpenModal(true) }}>
                <FontAwesome size={32} name="plus" color="black" />
            </TouchableOpacity>

            <FlatList
                style={styles.list}
                data={reviews}
                contentContainerStyle={{ paddingBottom: 60 }}
                renderItem={({ item }) => (
                    <View style={styles.listContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Review', item)}
                            style={styles.linkButton}
                        >
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    linkButton: {
        backgroundColor: "#4d94ff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
        marginTop: 10,
        fontWeight: "500",
        fontFamily: "sans-serif",
        width: "85%",
        minWidth: 280,
        minHeight: 40,
    },
    list: {
        //backgroundColor: "red",
    },
    listContainer: {
        alignItems: "center",
    },
    closeModal:{
        marginLeft:15,
        marginTop:10,
    }
})
