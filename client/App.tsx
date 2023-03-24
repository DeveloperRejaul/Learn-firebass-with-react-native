import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from './src/auth-screen/Auth.js';
import {NavigationContainer} from '@react-navigation/native';
import GetData from './src/databass-screen/GetData.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="GetData" component={GetData} />
        <Stack.Screen name="AUTH" component={Auth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
