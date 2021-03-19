import React  from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList } from 'react-native';
import colorType from '../helpers/colorType';

const PokemonInfo = ( { types } ) => {

    const typesPokemon = types.map((type) => {
        return type.type
    })

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>
                Pokemon Info
            </Text>

            <View>
                <Text style={ styles.subTitle } >Types</Text>
                <FlatList 
                    data={ typesPokemon }
                    renderItem={ (type) => {
                        let bgColor = colorType(type.item.name);

                        return(
                            <View  style={{
                                backgroundColor: bgColor, 
                                width: 60,
                                borderRadius: 6,
                                margin: 2,
                                paddingHorizontal: 3  }} > 
                                <Text style={ styles.typeText } >
                                {type.item.name}
                                </Text>
                            </View>

                        )
                    } }
                    keyExtractor={item => item.name}
                /> 
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        textAlign: 'center',
        color: '#fff'
    }, 
    subTitle: {
        fontSize: 16,
        color: '#fff'
    },
    container: {
        width: 400,
        height: 150,
        backgroundColor: "#5c6968", 
        padding: 10,
        marginBottom: 15
    }, 
    typeContainer: {
        backgroundColor: 'red',
        width: 60,
        borderRadius: 6,
        margin: 2,
        paddingHorizontal: 3 
    }, 
    typeText: {
        color: '#fff',
        textAlign: 'center'
    }
})

export default PokemonInfo;
