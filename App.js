

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import {StyleSheet, Text} from 'react-native';

import Portfolio from './src/screens/Portfolio';
import Round from './src/assets/icons/Round.svg';
import Challenge from './src/assets/icons/challenge'
import {IconButton} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import { SSRProvider } from '@react-aria/ssr';
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator()
const App = () => {
  return (
    <NativeBaseProvider>
      <SSRProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            // headerShown: false,
            headerLeft: () => {return  <Round margin={20} />
            },
             headerRight: () => {return <Challenge margin={20} />}
          }}>
          <Stack.Screen name="Portfolio" component={Portfolio} />
        </Stack.Navigator>
      </NavigationContainer>
      </SSRProvider>
  
    </NativeBaseProvider>
  );
};

export default App;
