import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
        <ImageBackground source={require("../../assets/img/backgroundRegister.png")} style={styles.backgroundImage}>
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