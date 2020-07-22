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

// For DrawerNavigator
import { createDrawerNavigator } from 'react-navigation-drawer';

enableScreens();

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen // Longer way to set other screen variables
  },
  MealDetail: MealDetailsScreen
}, {
  defaultNavigationOptions: { // Configure default styling for all navBars
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
  }
});

export default createAppContainer(MealsNavigator);
