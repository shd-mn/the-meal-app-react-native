/**
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Meals from './pages/Meals';
import Categories from './pages/Categories';
import MealDetail from './pages/MealDetail';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={Categories}
          options={{headerTitle: 'Categories'}}
        />
        <Stack.Screen
          name="Meals"
          component={Meals}
          initialParams={{categoryName: 'Seafood'}}
        />
        <Stack.Screen
          name="Detail"
          component={MealDetail}
          initialParams={{mealName: 'Arrabiata'}}
          options={{headerTitle: 'Meal Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
