import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image
} from 'react-native';
import yelp from '../services/yelp';

export default function ResultsShowScreen({ navigation }) {
  const id = navigation.getParam('id');
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getResult(id) {
    const response = await yelp.get(`/${id}`);

    setRestaurant(response.data);
    setLoading(false);
  }

  useEffect(() => {
    getResult(id);
  }, [id]);

  if (!restaurant) {
    return null;
  }

  const { name, photos } = restaurant;

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Text>{name}</Text>
          <FlatList
            keyExtractor={item => String(item)}
            data={photos}
            renderItem={({ item }) => (
              <Image style={styles.image} source={{ uri: item }} />
            )}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
});
