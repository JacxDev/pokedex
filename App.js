import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

//Custom hooks
import useFetch from './hooks/useFetch';

export default function App() {

  const [ pokemonId, setPokemonId ] = useState(1)
  const { data, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

  const handlePressNext = () => {
    setPokemonId(pokemonId + 1)
  }

  const handlePressBack = () => {
    setPokemonId(pokemonId - 1)
  }

  return (
    
    <View style={styles.container}>
      {
        loading ? 
        <Text>
          Cargando
        </Text>
        :
        <View>
          <Text> { data.name } </Text>
          <Image style={ styles.img } source={{ uri: data.sprites.front_default }} />
        </View>
      }

      <View>
        <Button onPress={ handlePressBack } title="back"/>
        <Button onPress={ handlePressNext } title="next"/>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width: 250,
    height: 250
  }
});
