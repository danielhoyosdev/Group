import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableWithoutFeedback } from 'react-native'

// Constantes
import { assets } from '../../assets/index'
import { strings } from '../../utils/strings'

const LoginScreen = (props: any) => {
	return (
		<View style={styles.container}>
			<ImageBackground source={assets.bg_login} style={styles.background__image}>
				<Text>{strings.title_login}</Text>
				<TouchableWithoutFeedback onPress={() => props.navigation.navigate('RestorePasswordScreen')}>
					<Text>{strings.forgot_password}</Text>
				</TouchableWithoutFeedback>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	background__image: {
		flex: 1,
	},
})


export default LoginScreen