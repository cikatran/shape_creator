/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SquarePage from './src/feature/Square';
import CirclePage from './src/feature/Circle';
import TrianglePage from './src/feature/Triangle/TrianglePage';
import AllPage from './src/feature/all/AllPage';
import configureStore from './src/configureStore';

const Tab = createBottomTabNavigator();

const { store } = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Square" component={SquarePage} />
          <Tab.Screen name="Circle" component={CirclePage} />
          <Tab.Screen name="Triangle" component={TrianglePage} />
          <Tab.Screen name="All" component={AllPage} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

