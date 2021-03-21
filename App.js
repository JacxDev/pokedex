import 'react-native-gesture-handler';
import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Pokemon from './views/Pokemon';
import AllPokemons from './views/AllPokemons';
import SearchPokemon from './views/SearchPokemon';

const Stack = createStackNavigator();

export default function App() {
  return(
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Pokemon"
        >
          <Stack.Screen
            name="Pokedex"
            component={ Pokemon }
          />
          <Stack.Screen
            name="All Pokemon"
            component={ AllPokemons }
          />
          <Stack.Screen
            name="Search Pokemon"
            component={ SearchPokemon }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
