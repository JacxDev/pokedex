import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import ImagePokemon from '../components/ImagePokemon';
import PokemonInfo from '../components/PokemonInfo';

const SearchPokemon = () => {

    const [ input, setInput ] = useState("");
    const [ urlPokemon, setUrlPokemon] = useState("https://pokeapi.co/api/v2/pokemon/pikachu");
   
    const handleChangeInput = (e) => {
        const text = e.toLowerCase().trim()
        setInput(text)
    }
  
    const handlePress = () => {
        setUrlPokemon(`https://pokeapi.co/api/v2/pokemon/${input}`)
    }

    return (
        <View >
            <Text>Search Pokemons</Text>
            <TextInput 
                style={ styles.textInput }
                value={ input }
                onChangeText={ handleChangeInput }
            />
            <TouchableOpacity style={ styles.btn } >
                <Text style={ styles.text } onPress={ handlePress } >
                    Search
                </Text>
            </TouchableOpacity>
            <View>
                <ImagePokemon uri={urlPokemon}/>
                <PokemonInfo url={urlPokemon}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({ 
    textInput: {
        backgroundColor: "#fff",  
        height: 50,
        margin: 25, 
        fontSize: 21,
        padding: 15
    }, 
    btn: {
        backgroundColor: "#5c6968", 
        height: 35,
        width: 80,
        alignSelf: 'center',
        padding: 8

    }, 
    text: {
        textAlign: "center"
    }
})

export default SearchPokemon;
