/* @flow */


import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image
} from 'react-native';
import MealDetails from './MealDetails';

function MealItem({
  title,
  imageURL,
  onSelectMeal,
  duration,
  complexity,
  affordability
}) {
  const mealContent = {
    duration: duration,
    complexity: complexity,
    affordability: affordability
  }
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={onSelectMeal}
      >
        <View style={styles.innerContainer}>
          <Image
            source={{uri: imageURL}}
            style={styles.image}
          />
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
        </View>
        <MealDetails {...mealContent}/>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({

  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
});

export default MealItem;
