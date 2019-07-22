import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image, ImageBackground
} from 'react-native';
import { Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgUri from 'react-native-svg-uri';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { LinearGradient } from 'expo-linear-gradient';
import { DrawerActions } from 'react-navigation';

export default class HomeScreen extends Component{
    render() {
        return (
            <View style={styles.container}>
                
                <Header  // // // // // // // // // // // // // //   Header  // // // // // // //  // // // // // // // 
                    barStyle="light-content"
                    leftComponent={<Button containerStyle={styles.ButtonMood}
                        type="clear"
                        onPress={() => { this.props.navigation.dispatch(DrawerActions.openDrawer()) }}
                        icon={
                            <SvgUri
                                width="30"
                                height="30"
                                color='#fff'
                                source={require('../../assets/icones/svg/menu.svg')}
                                style={{ marginLeft: 15, }}
                                 />
                        }
                        /> }
                    centerComponent={<Image style={{ width: 110, height: 25,}} source={require('../../assets/logo_feelm.png')}/>}
                    containerStyle={{ backgroundColor: 'rgba(19,23,47,0)', justifyContent: 'space-around', borderBottomColor: 'rgba(19,23,47,0)', zIndex:100 }}
                />
                
                <View style={{marginTop:100}}>
                    <LinearGradient
                        colors={['rgba(19,23,47,0)', 'rgba(19,23,47,1)', 'rgba(19,23,47,1)',]}
                        style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            height: '100%',
                        }}
                    />
                <CardStack
                    style={styles.content}
                    renderNoMoreCards={() => <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray' }}>No more cards :(</Text>}   
                    ref={swiper => {
                        this.swiper = swiper
                    }}

                    onSwiped={() => console.log('onSwiped')}
                    onSwipedLeft={() => console.log('onSwipedLeft')}
                >
                        <Card style={[styles.card, styles.card1]}><Image style={{ width: '100%', height: '100%' }} source={require('../../assets/aff1.jpg')} /></Card>
                        <Card style={[styles.card, styles.card2]} onSwipedLeft={() => alert('onSwipedLeft')}><Image style={{ width: '100%', height: '100%' }} source={require('../../assets/aff2.jpg')} /></Card>
                        <Card style={[styles.card, styles.card1]}><Image style={{ width: '100%', height: '100%' }} source={require('../../assets/aff3.jpg')} /></Card>
                        <Card style={[styles.card, styles.card2]}><Image style={{ width: '100%', height: '100%' }} source={require('../../assets/aff4.jpg')} /></Card>
                        <Card style={[styles.card, styles.card1]}><Image style={{ width: '100%', height: '100%' }} source={require('../../assets/aff5.jpg')} /></Card>

                </CardStack>
                    
                    <Image style={{ width: '100%', height: '100%', marginTop: -210, zIndex: -100, opacity:0.2 }} source={require('../../assets/fil_BG.jpg')} />
                    
                <View style={styles.footer}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={[styles.button, styles.red]} onPress={() => {
                            this.swiper.swipeLeft();
                        }}>
                                <SvgUri source={require('../../assets/close.svg')} width="28"
                                    height="28" />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.orange]} 
                                onPress={() => this.props.navigation.navigate('Film')} >
                                <SvgUri source={require('../../assets/play.svg')} width="40"
                                    height="40" style={{ marginLeft: 5, }}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.green]} onPress={() => {
                            this.swiper.swipeRight();
                        }}>
                                <SvgUri source={require('../../assets/check-mark.svg')} width="28"
                                    height="28" />
                        </TouchableOpacity>
                    </View>

                </View>
                    
                </View> 
                </View>
                        
            
        );
    }
}
// onPress = {() => {
//     this.swiper.goBackFromLeft();
// }}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#13172F'
    },
    Mood: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginRight: 15,
        marginLeft: 15,
    },

    
    TitleButton: {
        fontWeight: 'bold',
        flexDirection: 'column',
        marginLeft: 20,
    },
    content: {
        alignItems: 'center',
    },
    card: {
        width: 320,
        height: 470,
        backgroundColor: '#FE474C',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.5,
    },
    card1: {
        backgroundColor: '#FE474C',
    },
    card2: {
        backgroundColor: '#FEB12C',
    },
    label: {
        lineHeight: 400,
        textAlign: 'center',
        fontSize: 55,
        fontFamily: 'System',
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    footer: {
        alignItems: 'center',
        zIndex:100
    },
    buttonContainer: {
        width: 220,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
    },
    orange: {
        width: 80,
        height: 80,
        borderWidth: 6,
        backgroundColor: '#13172F',
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 55,
        marginTop: -30
    },
    green: {
        width: 50,
        height: 50,
        backgroundColor: '#3DB39E',
        borderRadius: 75,
        borderWidth: 6,
        borderColor: '#3DB39E',
    },
    red: {
        width: 50,
        height: 50,
        backgroundColor: '#DD2E44',
        borderRadius: 75,
        borderWidth: 6,
        borderColor: '#DD2E44',
    }
});