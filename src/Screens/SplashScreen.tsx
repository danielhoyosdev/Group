import React, { useEffect } from 'react'
import { ActivityIndicator, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { fontFamily, color } from '../../utils/constants'
import LogoComponent from '../Components/LogoComponent'

const SplashScreen = (props: any) => {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('InitialScreen');
        }, 1000)
    }, [])

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../assets/img/backgroundSplash.png")} style={styles.background__image}>
                <LogoComponent text_color={color.orange} size="large"/>
                <ActivityIndicator size="large" color={color.white}></ActivityIndicator>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background__image: {
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
        
        color: "#ffffff",
        marginBottom: 50,
        fontFamily: fontFamily.bold
    }
})

export default SplashScreen;

