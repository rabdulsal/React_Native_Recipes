import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Colors from './constants/Colors'
import CustomStyles from './constants/CustomStyles'
import Ionicons from '@expo/vector-icons/Ionicons';
// import Ionicons from '@expo/vector-icons/Ionicons';
// const fetchFonts = () => {
//   return Font.loadAsync({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
//   });
// };

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: Colors.primaryBrown },
      headerTintColor: 'white',
      sceneContainerStyle: {backgroundColor: Colors.secondaryBrown},
      drawerContentStyle: { backgroundColor: Colors.primaryBrown },
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: Colors.primaryBrown,
      drawerActiveBackgroundColor: '#e4baa1'
    }}
    >
    <Drawer.Screen
      name="Categories"
      component={CategoriesScreen}
      options={{
        title: 'All Categories',
        drawerIcon: ({ color, size }) => (
          <Ionicons name="list" color={color} size={size} />
        ),
      }}
    />
    <Drawer.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name="star" color={color} size={size} />
        ),
      }}
    />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
    <StatusBar style='light' />
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            // CustomStyles.HeaderStyles
            headerStyle: { backgroundColor: Colors.primaryBrown },
            headerTintColor: 'white',
            contentStyle: {backgroundColor: Colors.secondaryBrown}
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false

            }}
            />
          <Stack.Screen
            name="CategoryMeals"
            component={MealsOverViewScreen}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
          />
        </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
