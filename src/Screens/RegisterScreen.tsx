import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

// Constantes
import { assets } from '../../assets/index'
import { strings } from '../../utils/strings'

const RegisterScreen = () => {
	return (
		<View style={styles.container}>
			<ImageBackground source={assets.bg_register} style={styles.background__image}>
				<Text>{ strings.title_register }</Text>
			</ImageBackground>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	background__image: {
		flex: 1,
	},
});

export default RegisterScreen