import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import SignUpScreen from '../screens/SignUp'
import ChatScreen from '../screens/Chat'
import UserScreen from '../screens/Users'

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="SignInScreen" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Chatscreen" component={ChatScreen} />
        <Stack.Screen options={{ headerShown: false }} name="UserScreen" component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;