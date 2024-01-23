import React, { useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableWithoutFeedback, KeyboardAvoidingView, Alert } from 'react-native'

// Components
import { ButtonComponent, TextComponent, TitleComponent } from '../Components' 

// Constantes
import { assets } from '../../assets/index'
import { strings } from '../../utils/strings'
import { font_family, size } from '../../utils/constants'
import InputComponent from '../Components/InputComponent'

const LoginScreen = (props: any) => {
	// Variables
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");


	return (
		<ImageBackground source={assets.bg_login} style={styles.background__image}>
			<KeyboardAvoidingView behavior="height" style={styles.container}>
				<TitleComponent text_msg={strings.welcome} />
				<TextComponent text_msg={strings.login} />

				<View style={styles.form__wrapper}>
					<InputComponent 
						keyboard_type="email-address" 
						placeholder={strings.email}
						on_change={(email:string) => setEmail(email)}
						value={email}/>

					<InputComponent 
						secure_text={true} 
						placeholder={strings.password}
						on_change={(password:string) => setPassword(password)}
						value={password}/>

					<ButtonComponent 
						text={strings.title_login}
						on_press={() => Alert.alert(`Email: ${email}\n\nContraseña:${password}`)}
					/>
				</View>
				
				<TouchableWithoutFeedback onPress={() => props.navigation.navigate('RestorePasswordScreen')}>
					<Text style={styles.text__link}>{strings.forgot_password}</Text>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: size.XXL,
		justifyContent: "flex-end",
	},
	background__image: {
		flex: 1,
	},
	form__wrapper: {
		marginVertical: size.XXXL
	}, 
	text__link: {
		textAlign: "center",
		fontSize: size.MD,
		fontFamily: font_family.regular,
	}
})


export default LoginScreen