//Autheur: Theo
//Date: 14.05.2024
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

export const RecipeCard = ({
  title,
  description,
  calories,
  imageSource,
  style,
  onPress,
}) => {
  return (
    <View style={[s.container, style]}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{
            uri: imageSource,
          }}
          style={s.image}
        />
        <View style={s.content}>
          <View style={s.textContainer}>
            <Text style={s.title}>{title}</Text>
          </View>
          <View style={s.textContainer}>
            <Text style={s.description}>{description}</Text>
          </View>
          <View style={s.textContainer}>
            <Text style={s.calories}>Calories: {calories}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;

const s = StyleSheet.create({
  container: {
    marginRight: 15,
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    elevation: 5,
    width: windowWidth * 0.6,
  },
  image: {
    backgroundColor:'#3a9c9c',
    width: "100%",
    height: 220,
    borderRadius: 20,
    marginBottom: 10,
  },
  content: {},
  textContainer: {},
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
  calories: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#888",
  },
});
