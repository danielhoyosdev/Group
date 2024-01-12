import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

// Utils
import { color } from '../../utils/constants';


const InitialScreen = ( props:any ) => {
	const changeScreen = ( screen:string ) => {
		props.navigation.navigate(screen);
	}

	return (
		<View style={styles.container}>
			<ImageBackground source={require("../../assets/img/backgroundSplash.png")} style={styles.backgroundImage} >
				<View>
					<TouchableOpacity onPress={ () => changeScreen('LoginScreen') } >
						<LinearGradient colors={[color.blueLight, color.blue]} style={styles.screen__button}>
							<Text style={{ color: 'white' }}>Ingresar</Text>
						</LinearGradient>
					</TouchableOpacity>

					<TouchableOpacity onPress={ () => changeScreen('RegisterScreen')}>
						<LinearGradient colors={[color.blueLight, color.blue]} style={styles.screen__button}>
							<Text style={{ color: 'white' }}>Registrarse</Text>
						</LinearGradient>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	backgroundImage: {
		flex: 1,
		justifyContent: "flex-end",
		padding: 32,
	},
	screen__button: {
		width: "100%",
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 8,
	}
})

export default InitialScreen;