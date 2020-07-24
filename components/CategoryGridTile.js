/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback
} from 'react-native';

const CategoryGridTile = props => {
  let TouchComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchComponent = TouchableNativeFeedback;
  }
  return (
    <View
      style={styles.gridItem}
    >
      <TouchComponent
        style={{ flex: 1 }}
        onPress={props.onSelect}
      >
        <View style={{...styles.container, ...{backgroundColor: props.color}}}>
          <Text
            style={styles.title}
            numberOfLines={2}
          >
            {props.title}
          </Text>
        </View>
      </TouchComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'right'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden'
  }
});

export default CategoryGridTile;
