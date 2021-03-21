import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import useFetch from '../hooks/useFetch';

const ImagePokemon = ({ uri }) => {

    const { data, loading } = useFetch(uri);
 
    return (
        <View style={styles.imageContainer}>
            {
                loading ? 
                <Text>Cargando...</Text>
                :
                <Image style={styles.img} source={{ uri:  data.sprites.front_default }} />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
        marginTop: 15
    },
    img: {
        width: 250,
        height: 250,
        alignItems: "center",
    },
});

export default ImagePokemon;
