import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  Pressable,
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

function pressHandler() {
  props.navigation.navigate({
    routeName: 'CategoryMeals',
    params: {
      categoryId: itemData.item.id
    }
  });
}

 function CategoriesScreen({ navigation }){
   function renderGridItem(itemData) {
     function pressHandler() {
       navigation.navigate('CategoryMeals', {
         categoryId: itemData.item.id,
       });
     }
     return (
       <CategoryGridTile
         title={itemData.item.title}
         color={itemData.item.color}
         onPress={pressHandler}
        />
     );
   }
    return (
      <FlatList
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
      />

    );
}

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

});

export default CategoriesScreen;
