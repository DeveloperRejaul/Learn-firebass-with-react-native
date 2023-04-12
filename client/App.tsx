import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from './src/auth-screen/Auth.js';
import {NavigationContainer} from '@react-navigation/native';
import GetData from './src/databass-screen/GetData.js';
import CreateData from './src/databass-screen/CreateData.js';
import UpdateData from './src/databass-screen/UpdateData.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UPDATEDATA">
        <Stack.Screen name="GETDATA" component={GetData} />
        <Stack.Screen name="CREATEDATA" component={CreateData} />
        <Stack.Screen name="UPDATEDATA" component={UpdateData} />
        <Stack.Screen name="AUTH" component={Auth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
