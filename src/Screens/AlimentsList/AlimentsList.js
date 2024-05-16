import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { EmptyScreen } from "../../Components/EmptyScreen/EmptyScreen";
import { LoadingScreen } from "../../Components/EmptyScreen/LoadingScreen";
import axios from "axios";

export const AlimentList = ({ searchValue }) => {
  const [offData, setOffData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (searchValue.length >= 3) {
        try {
          setIsLoading(true);
          const response = await axios.get(
            `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchValue}&search_simple=1&page_size=100&page=1&json=1`
          );
          // exclude empty name
          setOffData(
            response.data.products.filter(
              (product) => product.product_name.trim() !== ""
            )
          );
          setIsLoading(false);
        } catch (error) {
          console.error("error:", error);
        }
      }
    };
    fetchData();
  }, [searchValue]);

  const renderItem = ({ item }) => (
    <View style={s.item}>
      <Text>{item.product_name}</Text>
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
