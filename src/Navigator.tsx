import React from 'react'

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { InitialScreen, SplashScreen, LoginScreen, RegisterScreen, RestorePasswordScreen } from './Screens/';

// Variables
const Stack = createNativeStackNavigator();

const Navigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false }}>
				<Stack.Screen name="SplashScreen" component={SplashScreen} />
				<Stack.Screen name="InitialScreen" component={InitialScreen} />
				<Stack.Screen name="LoginScreen" component={LoginScreen} />
				<Stack.Screen name="RegisterScreen" component={RegisterScreen} />
				<Stack.Screen name="RestorePasswordScreen" component={RestorePasswordScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigator
