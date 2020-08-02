/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native';

import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const CustomHeaderButton = props => {
  return (
    <HeaderButton {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomHeaderButton;
