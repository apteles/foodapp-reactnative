import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function({ result }) {
  const { name, image_url, rating, review_count } = result;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image_url }} />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.reviewStarts}>
          {rating} Stars, {review_count} Reviews
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    backgroundColor: '#ccc'
  },
  name: {
    fontWeight: "bold",
    fontSize: 12,
  },
  info: {},
  reviewStarts: {
    color: '#747474'
  }
});
