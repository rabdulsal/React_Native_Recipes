import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function List({ data }) {
  return data.map((datum) => (
      <View key={datum} style={styles.listItem}>
        <Text style={styles.itemText}>{datum}</Text>
      </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: '#e2b497'
  },
  itemText: {
    color: '#351401',
    textAlign: 'center'
  }
})

export default List;
