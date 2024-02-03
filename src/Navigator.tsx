import React from 'react'

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

// Screens
import { InitialScreen, 
		SplashScreen, 
		LoginScreen, 
		RegisterScreen, 
		RestorePasswordScreen,
		HomeScreen, 
		ProfileScreen,
		SearchScreen, 
		PostScreen, 
		NotificationScreen} from './Screens/';
import { color, size } from '../utils/constants';

// Variables
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const user = {
	token: "1234567890*",
	name: "Daniel Hoyos",
	genero: "Hombre",
	user: "danielhoyos",
}

// AuthScreens
const AuthScreens = () => (
	<Stack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false }}>
		<Stack.Screen name="SplashScreen" component={SplashScreen} />
		<Stack.Screen name="InitialScreen" component={InitialScreen} />
		<Stack.Screen name="LoginScreen" component={LoginScreen} />
		<Stack.Screen name="RegisterScreen" component={RegisterScreen} />
		<Stack.Screen name="RestorePasswordScreen" component={RestorePasswordScreen} />
	</Stack.Navigator>
)

const AppScreens = () => (
	<Tab.Navigator initialRouteName='HomeScreen' screenOptions={{ tabBarActiveTintColor: color.orange}}>
		<Tab.Screen name="HomeScreen" component={HomeScreen} options={{ tabBarLabel: "Inicio", tabBarIcon: ({ color }) => (<Icon name="home" color={color} size={size.LG} />) }} />
		<Tab.Screen name="SearchScreen" component={SearchScreen} options={{ tabBarLabel: "Buscar", tabBarIcon: ({ color }) => (<Icon name="search1" color={color} size={size.LG} />) }} />
		<Tab.Screen name="PostScreen" component={PostScreen} options={{ tabBarLabel: "Post", tabBarIcon: ({ color }) => (<Icon name="pluscircleo" color={color} size={size.LG} />) }} />
		<Tab.Screen name="NotificationScreen" component={NotificationScreen} options={{ tabBarLabel: "Notificaciones", tabBarIcon: ({ color }) => (<Icon name="notification" color={color} size={size.LG} />) }} />
		<Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{ tabBarLabel: "Perfil", tabBarIcon: ({ color }) => (<Icon name="user" color={color} size={size.LG} />) }} />
 	</Tab.Navigator>
)

const Navigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false }}>
				{
					!user
						? <Stack.Screen name="AuthScreens" component={AuthScreens} />
						: <Stack.Screen name="AppScreens" component={AppScreens} />
				}
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigator
