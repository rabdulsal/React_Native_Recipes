import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/Colors';
import { enableScreens } from 'react-native-screens';
// For TabsNavigator
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
// For DrawerNavigator
import { createDrawerNavigator } from 'react-navigation-drawer';

enableScreens();

const defaultStackNavOptions = {
  // Configure default styling for all navBars
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
  }

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen // Longer way to set other screen variables
    },
    MealDetail: MealDetailsScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailsScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return(
          <Ionicons
            name='ios-restaurant'
            size={25}
            color={tabInfo.tintColor}
          />
        );
      },
    tabBarColor: Colors.primaryColor
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: 'Favorites!',
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name='ios-star'
            size={25}
            color={tabInfo.tintColor}
          />
        );
      },
    tabBarColor: Colors.accentColor
    }
  }
}

const MealsFavTabNavigator = Platform.OS === 'android' ?
createMaterialBottomTabNavigator(tabScreenConfig, {
  activeColor: 'white',
  shifting: true
}) :
createBottomTabNavigator(
  tabScreenConfig,
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor
    }
  }
);

export default createAppContainer(MealsFavTabNavigator);
