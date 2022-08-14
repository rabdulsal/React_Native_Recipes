/* @flow */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Pressable
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors from '../constants/Colors';

function CustomHeaderButton({ icon, handleButtonPress, color, size }) {
  return (
    <Pressable
      onPress={handleButtonPress}
    >
    <View>
      <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    color: Colors.accentColor
  }
});

export default CustomHeaderButton;
