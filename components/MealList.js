/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import MealItem from './MealItem';

const MealList = props => {
  const renderMealItem = itemData => {
    return(
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageURL}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({routeName: 'MealDetail', params: {
            mealId: itemData.item.id
          }})
        }}
       />
    );
  };

  return (
    <View style={styles.list}>
      <Text>The CategoryMeals Screen!</Text>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{width: '100%'}}
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
});

export default MealList;
