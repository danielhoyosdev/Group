import React, { useState } from 'react';
import { Alert, ImageBackground, KeyboardAvoidingView, StyleSheet, TouchableWithoutFeedback, View, Text } from 'react-native'
import { assets } from '../../assets';
import { strings } from '../../utils/strings';
import { TitleComponent, InputComponent, ButtonComponent, TextComponent } from '../Components';
import { color, font_family, size } from '../../utils/constants';

const RestorePasswordScreen = (props:any) => {
	const [email, SetEmail] = useState("");

	return (
		<ImageBackground source={assets.bg_restore_password} style={styles.background__image}>
			<KeyboardAvoidingView behavior="height" style={styles.container}>
				<TitleComponent text_msg={strings.title_restore_password} />
				<TextComponent text_msg={strings.restore_msg} />
				
				<View style={styles.form__wrapper}>
					<InputComponent 
						keyboard_type='email-address' 
						placeholder={strings.email}
						on_change={(email:string) => SetEmail(email)}
						value={email}/>

					<ButtonComponent 
						text={strings.text_restore}
						on_press={() => Alert.alert(`Recuperar contraseña del email: ${email}`)}
					/>
				</View>

				<TouchableWithoutFeedback onPress={() => props.navigation.navigate('LoginScreen')}>
					<Text style={styles.text__link}>{strings.exist_account}</Text>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		</ImageBackground>
	)
};

const styles = StyleSheet.create({
	background__image: {
		flex: 1
	}, 
	container: {
		flex: 1,
		padding: size.XXL,
		justifyContent: "flex-end",
	}, 
	form__wrapper: {
		marginVertical: size.XL
	},
	text__link: {
		textAlign: "center",
		fontSize: size.MD,
		fontFamily: font_family.regular,
		color: color.white,
	}
});

export default RestorePasswordScreen;
