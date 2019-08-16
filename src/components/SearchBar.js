import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SearchBar({ term, onSearch, onTermSubmit }) {
  return (
    <View style={styles.background}>
      <Icon name="search" size={32} style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={term}
        onChangeText={term => onSearch(term)}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 4,
    marginHorizontal: 15,
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  iconStyle: {
    paddingHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
});
