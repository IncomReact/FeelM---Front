import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
            KeyboardAvoidingView,
            Image, ImageBackground, TextInput, ScrollView, 
} from 'react-native';
import { Button, Header, Tile, Avatar, SocialIcon} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgUri from 'react-native-svg-uri';
import { LinearGradient } from 'expo-linear-gradient';
import { DrawerActions } from 'react-navigation';

export default class ContactScreen extends React.Component {

    render() {
        return (
            <ImageBackground source={require('../../assets/bg_drawer.jpg')} style={{ width: '100%', height: '100%' }}>
            <View style={styles.container}>

               

            </View>
        </ImageBackground>



        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
    


});