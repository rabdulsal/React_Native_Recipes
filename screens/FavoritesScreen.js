import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import { useSelector } from 'react-redux';


 function FavoritesScreen({ navigation }) {
   const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);
   const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

   if (favoriteMeals.length === 0) {
     return (
       <View style={styles.mainContainer}>
         <Text style={styles.noFavsText}>You have no Favorites right now.</Text>
       </View>
     );
   }

   return <MealList mealsData={favoriteMeals} />
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',

  },
  noFavsText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  }
})

export default FavoritesScreen;
