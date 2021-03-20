import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const ImagePokemon = ({ uri }) => {
    return (
        <View style={styles.imageContainer}>
            <Image style={styles.img} source={{ uri: uri }} />
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
    },
    img: {
        width: 250,
        height: 250,
        alignItems: "center",
    },
});

export default ImagePokemon;
