import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import colorType from "../helpers/colorType";
import useFetch from '../hooks/useFetch';

const PokemonInfo = ({ url }) => {

    const { data, loading } = useFetch(url);
    let types;

    if(!loading){
        const dataTypes = data.types.map((el) => {
                return el.type;
        });
        types = dataTypes
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pokemon Info</Text>
            {
                loading ? 
                <Text>
                    Cargando...
                </Text>
                :
                
                <View style={styles.childContainer}>
                    <View style={{ marginHorizontal: 20 }}>
                        <Text style={styles.subTitle}>Name: { data.name } </Text>
                        <Text style={styles.subTitle}>No. { data.id } </Text>
                        <Text style={styles.subTitle}>Weight: { data.weight / 10} kg</Text>
                        <Text style={styles.subTitle}>Height: { data.height / 10} mts</Text>
                    </View>
                    <View>
                        <Text style={styles.subTitle}>Type</Text>
                        <FlatList
                            data={types}
                            renderItem={(type) => {
                                let bgColor = colorType(type.item.name);
                                return (
                                    <View
                                        style={{
                                            backgroundColor: bgColor,
                                            width: 60,
                                            borderRadius: 6,
                                            margin: 2,
                                            paddingHorizontal: 3,
                                        }}
                                    >
                                        <Text style={styles.typeText}>{type.item.name}</Text>
                                    </View>
                                );
                            }}
                            keyExtractor={(item) => item.name}
                        />
                    </View>
                </View>

            }
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        textAlign: "center",
        color: "#fff",
    },
    subTitle: {
        fontSize: 16,
        color: "#fff",
    },
    container: {
        width: 400,
        height: 150,
        backgroundColor: "#5c6968",
        padding: 10,
        marginBottom: 15,
        borderRadius: 12,
    },
    childContainer: {
        flex: 1,
        flexDirection: "row",
    },
    typeText: {
        color: "#fff",
        textAlign: "center",
    },
});

export default PokemonInfo;
