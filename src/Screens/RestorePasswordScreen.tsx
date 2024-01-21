import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { assets } from '../../assets';
import { strings } from '../../utils/strings';


const RestorePasswordScreen = (props:any) => {
	return (
		<ImageBackground source={assets.bg_restore_password} style={styles.background__image}>
			<Text>{ strings.text_restore_password }</Text>

			<TouchableWithoutFeedback onPress={() => props.navigation.navigate('LoginScreen')}>
				<Text>
					{ strings.text_login }
				</Text>
			</TouchableWithoutFeedback>
		</ImageBackground>
	)
};

const styles = StyleSheet.create({
	background__image: {
		flex: 1
	}
});

export default RestorePasswordScreen;
