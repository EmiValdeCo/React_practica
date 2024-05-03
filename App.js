import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Calculadora from './src/screen/Calculadore';
import TodoList from './src/screen/todoList';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Calculadora" component={Calculadora} />
        <Tab.Screen name="TodoList" component={TodoList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
