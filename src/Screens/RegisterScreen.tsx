import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { assets } from '../../assets/index'

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
        <ImageBackground source={assets.bg_register} style={styles.backgroundImage}>
          <Text>Registrarse</Text>
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
  },
})



export default RegisterScreen