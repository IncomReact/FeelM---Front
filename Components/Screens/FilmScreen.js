import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image, ImageBackground
} from 'react-native';
import { Button, Header, Tile } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgUri from 'react-native-svg-uri';
import { LinearGradient } from 'expo-linear-gradient';
import { DrawerActions } from 'react-navigation';

export default class FilmScreen extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Header  // // // // // // //  Header
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
                    />}
                    centerComponent={<Image style={{ width: 110, height: 25, }} source={require('../../assets/logo_feelm.png')} />}
                    containerStyle={{ backgroundColor: 'rgba(19,23,47,0)', justifyContent: 'space-around', borderBottomColor: 'rgba(19,23,47,0)', zIndex: 100 }}
                />
                <View style={styles.featured}>
                    <Tile
                        imageSrc={require('../../assets/fil_BG.jpg')}
                        icon={{ name: 'play-circle', type: 'font-awesome', color: '#fff', size: 50, marginTop : 30 }}
                        featured
                    />

                </View >
                 
               <View style={styles.container2}>
                    <Image
                        source={require('../../assets/aff1.jpg')}
                        style={{ width: 150, height: 210, marginTop: -80, marginLeft:30, alignItems:'flex-start'}}
                    />
                   

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
    
    container2: {
        flex:1,
        alignItems: 'flex-start',
        width: '100%',
        marginTop: -25,
        borderRadius: 25,
        borderColor: "#13172F",
        borderWidth: 1,
        backgroundColor: '#13172F',
    },
    featured: {
        marginTop: -90,
        zIndex: -10,
        opacity:0.6,
        justifyContent: 'center',
        alignItems: 'center'
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
        zIndex: 100
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