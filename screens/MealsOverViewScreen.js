import React, { useLayoutEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList
} from 'react-native';

import { useRoute } from '@react-navigation/native'; // Test Code

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';

 function MealsOverViewScreen({ navigation, route })  {
   // const route = useRoute(); Test code

   const catId = route.params.categoryId;
   const displayedMeals = MEALS.filter((mealItem) => {
     return mealItem.categoryIds.indexOf(catId) >= 0;
   });

   useLayoutEffect(() => {
     const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
     navigation.setOptions({
       title: categoryTitle
     });
   }, [catId, navigation]);

   return (
     <MealList mealsData={displayedMeals} />
   )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16
  },
});

export default MealsOverViewScreen;
