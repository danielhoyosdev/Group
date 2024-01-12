import React from 'react'

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import SplashScreen from './Screens/SplashScreen';
import InitialScreen from './Screens/InitialScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';

// Variables
const Stack = createNativeStackNavigator();

const Navigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='SplashScreen'>
				<Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
				<Stack.Screen name="InitialScreen" component={InitialScreen} options={{ headerShown: false }} />
				<Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
				<Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigator
