import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from './src/screens/Onboarding';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import Details from './src/screens/Details';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnBoarding" options={{ headerShown: false }} component={OnBoarding} />
        <Stack.Screen name="Register" options={{ headerShown: false }} component={Register} />
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="Details" options={{ headerShown: false }} component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}