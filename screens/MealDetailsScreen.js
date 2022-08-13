import React, { useLayoutEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  Pressable
} from 'react-native';

import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import Colors from '../constants/Colors'

 function MealDetailsScreen({ navigation, route }) {
   const mealId = route.params.mealId;
   const selectedMeal = MEALS.find(meal => meal.id === mealId);

  function handleButtonPress() {
    navigation.navigate("MealsCategories");
  }
   useLayoutEffect(() => {
     navigation.setOptions({
       title: selectedMeal.title,
       headerRight: () => {
         return (
           <HeaderButton
             icon="star"
             handleButtonPress={handleButtonPress}
             color="white"
             />
          );
       }
     });
   }, [navigation, handleButtonPress]);


    return (
      <ScrollView style={styles.screen}>
        <Image
          style={styles.image}
          source={{ uri:selectedMeal.imageURL }}
        />
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />
      <View style={styles.outerContainer}>
          <View style={styles.innerContainer}>
            <Subtitle>{"Ingredients".toUpperCase()}</Subtitle>
            <List data={selectedMeal.ingredients} />
            <Subtitle>{"Steps".toUpperCase()}</Subtitle>
            <List data={selectedMeal.steps} />
          </View>
        </View>

        <Pressable
          onPress={handleButtonPress}
        >
            <Text
              style={styles.button}
            >
              Meal Categories
            </Text>
        </Pressable>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
  screen: {
    marginBottom: 32
  },
  outerContainer: {
    alignItems: 'center'
  },
  innerContainer: {
    width: '80%'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 12,
    margin: 8,
    textAlign: 'center',
    color: 'white'
  },
  image: {
    width: '100%',
    height: 350,
  },
  detailText: {
    color: 'white'
  },
  button: {
    // color: '#e2b497',
    color: Colors.accentColor,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 6
  }
});

export default MealDetailsScreen;
