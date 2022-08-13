/* @flow */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Pressable
} from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; Throwing error?
import Colors from '../constants/Colors';

function CustomHeaderButton({ icon, handleButtonPress, color }) {
  return (
    <Pressable
      onPress={handleButtonPress}
    >
    <View>
      <Text style={styles.button}>Overview</Text>
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
