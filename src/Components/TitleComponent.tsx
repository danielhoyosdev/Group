import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { color, font_family, size } from '../../utils/constants'

interface Props {
	text_msg: string
}

const TitleComponent:React.FC<Props> = ({ text_msg }) => {
	return (
		<View>
			<Text style={styles.text__msg}>{text_msg}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	text__msg: {
		fontSize: size.XXL,
		color: color.white,
		fontFamily: font_family.bold,
	}
})

export default TitleComponent;
