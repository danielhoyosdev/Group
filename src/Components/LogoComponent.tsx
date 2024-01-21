import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { font_family } from '../../utils/constants'
import { strings } from '../../utils/strings'

interface LogoProps {
    text_color: string,
    size: string
}

const LogoComponent:React.FC<LogoProps> = ({ text_color, size }) => {
    const font_size = (size === "large") ? 80 : 50;

  return (
    <View>
        <Text style={[styles.title__text, { color: text_color, fontSize: font_size }]}>
            { strings.app_name }
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    title__text: {
        fontFamily: font_family.neon,
    }
})

export default LogoComponent;
