import React from 'react'
import { StyleSheet, Text } from 'react-native';
import { color, font_family, size } from '../../utils/constants'

interface TextProps {
    text_msg: string,
    text_color?: string,
    font_size?: number,
    font_type?: string,
}

const TextComponent: React.FC<TextProps> = ({
    text_msg,
    text_color = color.white,
    font_size = size.LG,
    font_type = font_family.regular
}) => {
    return (
        <Text style={[styles.text__container, { color: text_color, fontSize: font_size, fontFamily: font_type}]} >
            {text_msg}
        </Text>
    )
}

const styles = StyleSheet.create({
    text__container: {
        marginTop: size.MD,
    }
});

export default TextComponent
