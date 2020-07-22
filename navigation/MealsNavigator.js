import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
// For TabsNavigator
import { createBottomTabNavigator } from 'react-navigation-tabs';

// For DrawerNavigator
import { createDrawerNavigator } from 'react-navigation-drawer';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen // Longer way to set other screen variables
  },
  MealDetail: MealDetailsScreen
});

export default createAppContainer(MealsNavigator);
