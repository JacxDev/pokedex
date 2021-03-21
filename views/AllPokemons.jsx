import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Button } from "react-native";
import useFetch from "../hooks/useFetch";

import ImagePokemon from "../components/ImagePokemon";

const AllPokemons = () => {
    const { data, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon?limit=5&offset=0`);

    return (
        <View>
            <View>
                {loading ? (
                    <Text> Cargando... </Text>
                ) : (
                    <FlatList
                        data={data.results}
                        renderItem={(element) => {
                            return (
                                <View>
                                    <ImagePokemon uri={element.item.url} />
                                    <View style={styles.info}>
                                        <Text style={styles.title}>{element.item.name}</Text>
                                    </View>
                                </View>
                            );
                        }}
                        keyExtractor={(item) => item.name}
                    />
                )}
            </View>
            <View>
                <Button 
                    title="Siguiente"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    info: {
        backgroundColor: "#5c6968",
        height: 35,
        marginBottom: 5,
    },
    title: {
        color: "#fff",
        fontSize: 19,
    }
});

export default AllPokemons;
