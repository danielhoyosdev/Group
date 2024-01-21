import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { fontFamily, size } from '../../utils/constants';

// Utils
import { color } from '../../utils/constants';
import ButtonComponent from '../Components/ButtonComponent';
import TitleComponent from '../Components/LogoComponent';
import TextComponent from '../Components/TextComponent';
import { strings } from '../../utils/strings';
import { assets } from '../../assets/index';


const InitialScreen = ( props:any ) => {
	const changeScreen = ( screen:string ) => {
		props.navigation.navigate(screen);
	}

	return (
		<View style={styles.container}>
			<ImageBackground source={assets.bg_initial} style={styles.backgroundImage} >
				<View style={styles.initial_text__wrapper}>
					<TitleComponent text_color={color.orange} size="large" />
					<TextComponent text_msg={ strings.initial_title } />
					<TextComponent text_msg={ strings.initial_subtitle } />
				</View>
				<View>
					<ButtonComponent text={strings.text_login} on_press={() => changeScreen('LoginScreen')} />
					<ButtonComponent text={strings.text_register} on_press={() => changeScreen('RegisterScreen')} />
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
	initial_text__wrapper: {
		marginBottom: size.XXL,
	}
})

export default InitialScreen;