import React from 'react'
import { Text, StyleSheet, TouchableHighlight } from 'react-native'
import { color, font_family, size } from '../../utils/constants'

interface ButtonProps {
	text: string,
	on_press: any,
	bg_color?: string,
	text_color?: string,
}

const ButtonComponent: React.FC<ButtonProps> = ({ text, on_press, bg_color = color.orange, text_color = color.white }) => {
	return (
		<TouchableHighlight style={[styles.button__wrapper, { backgroundColor: bg_color }]} onPress={on_press}>
			<Text style={[styles.button__text, { color: text_color }]}>{text}</Text>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	button__wrapper: {
		borderRadius: size.XXS,
		padding: size.MD,
		marginTop: size.LG,
		justifyContent: "center",
		alignItems: "center",
	},
	button__text: {
		fontFamily: font_family.regular,
		fontSize: size.LG,
	},
})

export default ButtonComponent;
