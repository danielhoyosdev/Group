import React from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'

// Components
import { ButtonComponent, LogoComponent, TextComponent } from '../Components';

// Constantes
import { size, color } from '../../utils/constants';
import { strings } from '../../utils/strings';
import { assets } from '../../assets/index';

const InitialScreen = ( props:any ) => {
	const changeScreen = ( screen:string ) => {
		props.navigation.navigate(screen);
	}

	return (
		<View style={styles.container}>
			<ImageBackground source={assets.bg_initial} style={styles.background__image} >
				<View style={styles.initial_text__wrapper}>
					<LogoComponent text_color={color.orange} size="large" />
					<TextComponent text_msg={ strings.initial_slogan } />
					<TextComponent text_msg={ strings.initial_subtitle } />
				</View>
				<View>
					<ButtonComponent text={strings.title_login} on_press={() => changeScreen('LoginScreen')} />
					<ButtonComponent text={strings.title_register} on_press={() => changeScreen('RegisterScreen')} />
				</View>
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
		justifyContent: "flex-end",
		padding: 32,
	},
	initial_text__wrapper: {
		marginBottom: size.XXL,
	}
})

export default InitialScreen;