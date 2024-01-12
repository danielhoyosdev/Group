import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <ImageBackground source={require("../../assets/img/backgroundLogin.png")} style={styles.backgroundImage}>
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