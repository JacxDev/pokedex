import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import PokemonInfo from './components/PokemonInfo';

//Custom hooks
import useFetch from './hooks/useFetch';

export default function App() {

  const [ pokemonId, setPokemonId ] = useState(1)
  const { data, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

  const handlePressNext = () => {
      setPokemonId(pokemonId + 1)
  }

  const handlePressBack = () => {
    (pokemonId > 1) && setPokemonId(pokemonId - 1)
    
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
          <Text style={ styles.name } > { data.name } </Text>
          <View style={ styles.imageContainer } > 
            <Image style={ styles.img } source={{ uri: data.sprites.front_default }} />
          </View>
          <PokemonInfo  types={ data.types } />
        </View>
        
      }


      <View style={ styles.btnContainer }>
        <Button onPress={ handlePressBack } title="Prev"/>
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
  imageContainer:{
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  name: {
    fontSize: 28, 
    textAlign: 'center'
  },  
  img:{
    width: 250,
    height: 250, 
    alignItems: 'center'
  },
  btnContainer: {
    flexDirection: 'row'
    
  }
});
