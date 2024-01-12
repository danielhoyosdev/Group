import React, { useEffect } from 'react'
import { ActivityIndicator, ImageBackground, StyleSheet, Text, View } from 'react-native'

const SplashScreen = (props: any) => {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('InitialScreen');
        }, 5000)
    }, [])

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../assets/img/backgroundSplash.png")} style={styles.backgroundImage}>
                <Text style={styles.title}>GROUP</Text>
                <ActivityIndicator size="large" color="#fff"></ActivityIndicator>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 32,
        
    },
    screen__button: {
        width: "100%",
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 8,
    },
    title: {
        fontSize: 50,
        color: "#ffffff",
        marginBottom: 100,
        fontFamily: 'NunitoSans-Black'
    }
})

export default SplashScreen;

