import React, { useEffect } from 'react'
import { ActivityIndicator, ImageBackground, StyleSheet, View } from 'react-native'

// Constantes
import { color } from '../../utils/constants'
import { assets } from '../../assets/index';

// Components
import { LogoComponent } from '../Components';

const SplashScreen = (props: any) => {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('InitialScreen');
        }, 1000)
    }, [])

    return (
        <View style={styles.container}>
            <ImageBackground source={assets.bg_initial} style={styles.background__image}>
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
})

export default SplashScreen;

