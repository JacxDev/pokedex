import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import useFetch from '../hooks/useFetch';

import ImagePokemon from '../components/ImagePokemon';

const AllPokemons = () => {
    const { data, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`);
   
    console.log(data)
    return (
        <View>
            {
                loading ?
                <Text> Cargando... </Text>
                :
                <FlatList 
                    data={ data.results }
                    renderItem={(element) => {
                        return (
                            <View>
                                <ImagePokemon uri={ element.item.url } />
                                <Text>
                                    { element.item.name }
                                </Text>
                            </View>
                        );
                    }}
                    keyExtractor={(item) => item.name}
                />
            }
        </View>
    )
}

export default AllPokemons;