import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
//Components
import ImagePokemon from "../components/ImagePokemon";
import PokemonInfo from "../components/PokemonInfo";
//Custom hooks
import useFetch from "../hooks/useFetch";

const Pokemon = ({ navigation }) => {
    const [pokemonId, setPokemonId] = useState(1);
    const { data, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

    const handlePressNext = () => {
        setPokemonId(pokemonId + 1);
    };

    const pressToPokemons = () => {
        navigation.navigate("All Pokemon");
    };

    const pressSearchPokemon = () => {
        navigation.navigate("Search Pokemon");
    };

    const handlePressBack = () => {
        pokemonId > 1 && setPokemonId(pokemonId - 1);
    };
    return (
        <View style={styles.container}>
            {loading ? (
                <Text>Cargando...</Text>
            ) : (
                <View>
                    <Text style={styles.name}> {data.name} </Text>
                    <ImagePokemon uri={data.sprites.front_default} />
                    <PokemonInfo data={data} />
                </View>
            )}

            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={handlePressBack}>
                    <Text style={{ color: "#fff" }}>Prev</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={handlePressNext}>
                    <Text style={{ color: "#fff" }}>Next</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.btnContainer}>
                <View>
                    <TouchableOpacity style={styles.btn} onPress={pressToPokemons}>
                        <Text style={{ color: "#fff" }}>All Pokemons</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn} onPress={pressSearchPokemon}>
                        <Text style={{ color: "#fff" }}>Search Pokemon</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    btn: {
        backgroundColor: "#5c6968",
        alignItems: "center",
        padding: 10,
        marginHorizontal: 10,
        width: 140,
    },
    imageContainer: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
    },
    name: {
        fontSize: 28,
        textAlign: "center",
    },
    img: {
        width: 250,
        height: 250,
        alignItems: "center",
    },
    btnContainer: {
        flexDirection: "row",
        marginVertical: 10,
    },
});

export default Pokemon;
