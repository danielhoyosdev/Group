import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

// Constantes
import { assets } from '../../assets/index'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <ImageBackground source={assets.bg_login} style={styles.background__image}>
          <Text>Ingresar</Text>
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
  },
})


export default LoginScreen