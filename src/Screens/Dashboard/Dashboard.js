import { View, StyleSheet, Text } from 'react-native';
import { Container } from '../../Components/Container/Container';
import { SearchBar } from 'react-native-elements';
import React, { useEffect, useState } from 'react'

export const Dashboard = () => {
    const [search, setSearch] = useState("");

    const [list, setList] = useState(["haram", "harss", "goat"])
    const [searchedList, setSearchedList] = useState([])


    useEffect(() => {
        const filteredList = list.filter(item =>
            item.toLowerCase().includes(search.toLowerCase())
        );

        setSearchedList(filteredList);
    }, [search]);



    return (
        <Container>
            <View style={styles.container}>
                <View style={styles.navigationBarArea}>
                    {/* Barre de navigation */}
                    <Text>Test</Text>
                </View>
                <View style={styles.searchBarArea}>
                    <SearchBar
                        placeholder='Search'
                        value={search}
                        onChangeText={(e) => setSearch(e)}
                    />
                </View>
                <View style={styles.mealListArea}>
                    {/* Liste de plats triée */}
                    { search.length >= 1 ? searchedList.map((e) => <Text key={e} style={{ color: 'white' }}>{e}</Text>) : list.map((e) => <Text key={e} style={{ color: 'white' }}>{e}</Text>) }
                </View>
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "red",
    },
    navigationBarArea: {
        height: 60,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchBarArea: {
        height: 60,
        backgroundColor: '#e0e0e0',
    },
    mealListArea: {
        flex: 1,
        backgroundColor: 'black',
    },
});
