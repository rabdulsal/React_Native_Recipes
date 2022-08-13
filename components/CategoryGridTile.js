/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function CategoryGridTile({title, color, onPress }){
  const navigation = useNavigation(); // Testing and example purposes

  // if (Platform.OS === 'android' && Platform.Version >= 21) {
  //   TouchComponent = TouchableNativeFeedback;
  // }
  return (
    <View
      style={styles.gridItem}
    >
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        style={styles.button}
        onPress={onPress}
      >
        <View style={[styles.container, {backgroundColor: color}]}>
          <Text
            style={styles.title}
            numberOfLines={2}
          >
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  button: {
    flex: 1
  },
  buttonPressed: {
    opacity: 0.5
  },
  title: {
    // fontFamily: 'open-sans-bold',
    fontWeight: 'bold',
    fontSize: 20,
    // textAlign: 'right'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 4,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
  }
});

export default CategoryGridTile;
