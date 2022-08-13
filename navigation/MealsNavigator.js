import React from 'react';
import { Platform } from 'react-native';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealsOverViewScreen from '../screens/MealsOverViewScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/Colors';
import { enableScreens } from 'react-native-screens';
// For TabsNavigator
import FavoritesScreen from '../screens/FavoritesScreen';
// For DrawerNavigator

enableScreens();

// const defaultStackNavOptions = {
//   // Configure default styling for all navBars
//     headerStyle: {
//       backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
//     },
//     headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
//   }
//
// const MealsNavigator = createStackNavigator({
//     Categories: CategoriesScreen,
//     CategoryMeals: {
//       screen: CategoryMealsScreen // Longer way to set other screen variables
//     },
//     MealDetail: MealDetailsScreen
//   },
//   {
//     defaultNavigationOptions: defaultStackNavOptions
//   }
// );
//
// const FavNavigator = createStackNavigator({
//     Favorites: FavoritesScreen,
//     MealDetail: MealDetailsScreen
//   },
//   {
//     defaultNavigationOptions: defaultStackNavOptions
//   }
// );
//
// const tabScreenConfig = {
//   Meals: {
//     screen: MealsNavigator,
//     navigationOptions: {
//       tabBarIcon: (tabInfo) => {
//         return(
//           // <Ionicons
//           //   name='ios-restaurant'
//           //   size={25}
//           //   color={tabInfo.tintColor}
//           // />
//           <View></View>
//         );
//       },
//     tabBarColor: Colors.primaryColor
//     }
//   },
//   Favorites: {
//     screen: FavNavigator,
//     navigationOptions: {
//       tabBarLabel: 'Favorites!',
//       tabBarIcon: (tabInfo) => {
//         return (
//           <Ionicons
//             name='ios-star'
//             size={25}
//             color={tabInfo.tintColor}
//           />
//         );
//       },
//     tabBarColor: Colors.accentColor
//     }
//   }
// }

function MealsNavigator() {
  return (
    <View></View>
  )
}


export default MealsNavigator;
