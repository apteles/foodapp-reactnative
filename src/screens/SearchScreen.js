import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import ResultList from '../components/ResultList';
import useResults from '../hooks/useResults';

export default function SearchScreen() {
  const [term, setTerm] = useState('');
  const [handleSubmit, results, errorMessage] = useResults();

  /**
   * Param price means '$' or '$$' or '$$$'
   * @param {*} price
   */
  function filterResultsByPrice(price) {
    return results.filter(result => result.price === price);
  }

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onSearch={term => setTerm(term)}
        onTermSubmit={() => handleSubmit(term)}
      />
      <Text>Search Screen by: {results.length}</Text>

      <ScrollView>
        <ResultList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultList results={filterResultsByPrice("$$")} title="Bit Price" />
        <ResultList results={filterResultsByPrice("$$$")} title="Big Spender" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
