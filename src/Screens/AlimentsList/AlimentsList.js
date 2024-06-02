//Autheur: Salim, Theo
//Date: 15.05.2024

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { EmptyScreen } from "../../Components/EmptyScreen/EmptyScreen";
import { LoadingScreen } from "../../Components/EmptyScreen/LoadingScreen";
import { useNavigation } from "@react-navigation/native";
import { getAliments } from "./AlimentsListQuerys";

export const AlimentList = ({ searchValue }) => {
  const [offData, setOffData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    
    getAliments(setIsLoading, setOffData, searchValue);
  }, [searchValue]);

  const handlePressItem = (item) => {
    navigation.navigate("AlimentDetail", {
      productId: item.id,
    });
  };

  const renderItem = ({ item }) => (
    <View style={s.item}>
      <TouchableOpacity onPress={() => handlePressItem(item)}>
        <Text>{item.product_name}</Text>
      </TouchableOpacity>
    </View>
  );

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (searchValue.length < 3) {
    return <EmptyScreen />;
  }

  return (
    <FlashList
      data={offData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      estimatedItemSize={100}
    />
  );
};

const s = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
