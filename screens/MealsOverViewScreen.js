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



   function renderMealItem(itemData) {
     const item = itemData.item;
     function selectMealHandler() {
       navigation.navigate('MealDetails', {
         mealId: item.id
       });
     }
     const mealItemProps = {
       title: item.title,
       imageURL: item.imageURL,
       affordability: item.affordability,
       complexity: item.complexity,
       duration: item.duration
     }
     return(
       <MealItem
        {...mealItemProps}
        onSelectMeal={selectMealHandler}
       />
     );
   };

    return (
      <View style={styles.screen}>
        <FlatList
          data={displayedMeals}
          keyExtractor={(item, index) => item.id}
          renderItem={renderMealItem}
       />
      </View>
    );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16
  },
});

export default MealsOverViewScreen;
