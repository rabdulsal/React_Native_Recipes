/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import MealItem from './MealItem';

function MealList({ mealsData }) {

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageURL: item.imageURL,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration
    }
    return(
      <MealItem {...mealItemProps} />
    );
  };

   return (
     <View style={styles.screen}>
       <FlatList
         data={mealsData}
         keyExtractor={(item, index) => item.id}
         renderItem={renderMealItem}
      />
     </View>
   );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  screen: {
    flex: 1,
    padding: 16
  },
});

export default MealList;
