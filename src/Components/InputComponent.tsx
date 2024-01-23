import React from 'react';
import { View, TextInput, StyleSheet, KeyboardTypeOptions, TextInputProps } from 'react-native';
import { color, font_family, size } from '../../utils/constants';

interface Props {
	keyboard_type?: KeyboardTypeOptions,
	secure_text?: boolean,
	maxLength?: number,
	placeholder: string,
	placeholder_color?: string,
	on_change: any,
	value: any,
}

const InputComponent:React.FC<Props> = ({ 
	keyboard_type = "default", 
	secure_text = false,
	maxLength = 20, 
	placeholder = "", 
	placeholder_color = color.white,
	on_change,
	value
}) => {
	return (
		<View style={styles.input__wrapper}>
			<TextInput 
				style={styles.input} 
				autoCapitalize="none" 
				keyboardType={keyboard_type}
				maxLength={maxLength} 
				secureTextEntry={secure_text}
				placeholder={placeholder}
				placeholderTextColor={placeholder_color}
				returnKeyType="next"
				onChangeText={on_change}
				value={value} />
		</View>
	);
};

const styles = StyleSheet.create({
	input__wrapper: {
		marginBottom: size.LG,
        borderRadius: size.XXS,
	},
	input: {
        borderRadius: size.XXS,
		padding: size.MD,
        backgroundColor: color.white_alpa,
        fontSize: size.MD,
        color: color.white,
        fontFamily: font_family.regular,
	}
});

export default InputComponent;
