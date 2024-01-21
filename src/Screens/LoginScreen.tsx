import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { assets } from '../../assets/index'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <ImageBackground source={assets.bg_login} style={styles.backgroundImage}>
          <Text>Ingresar</Text>
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


export default LoginScreen