import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image, ImageBackground
} from 'react-native';
import { Button, Header, Tile, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgUri from 'react-native-svg-uri';
import { LinearGradient } from 'expo-linear-gradient';
import { DrawerActions } from 'react-navigation';

export default class SettingsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Header  // // // // // // //  Header
                    barStyle="light-content"
                    leftComponent={<Button 
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
                    centerComponent={{ text: 'Réglages', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                    containerStyle={{ backgroundColor: 'rgba(19,23,47,0)', justifyContent: 'space-around', borderBottomColor: 'rgba(19,23,47,0)', zIndex: 100 }}
                />
                <View style={styles.featured}>
                    <Tile
                        imageSrc={require('../../assets/fil_BG.jpg')}
                        featured
                    />

                </View >
                 
               <View style={styles.container2}>

               <Avatar containerStyle={styles.Avatar}
                        size={100}
                        rounded

                        source={{
                            uri:
                                'https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/58659893_3214554075237045_7885584668697821184_o.jpg?_nc_cat=111&_nc_oc=AQlQdsbEKXbzMhGLuqKiqAPMssArWGyPg0nPELRgjqnkoXy1GijksMGC06DISd_arfE&_nc_ht=scontent-bru2-1.xx&oh=2a82b6328bce5aafd9c3e6957bbca2aa&oe=5DE9B389',
                        }}
                        

                    />

<View style={styles.Mood}>
                    <Button containerStyle={styles.ButtonMood}
                        title="Mon Profil"
                        type="clear"
                        icon={
                            <SvgUri
                                width="60"
                                height="60"
                                source={require('../../assets/icones/svg/cinema.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', width: '100%'}}
                        onPress={() => this.props.navigation.navigate('With')}
                    />
                    <Button containerStyle={styles.ButtonMood}
                        title="Mot de Passe" 
                        type="clear"
                        icon={
                            <SvgUri
                                width="60"
                                height="60"
                                source={require('../../assets/icones/svg/key.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', width: '100%'  }}

                        onPress={() => this.props.navigation.navigate('With')}
                    />

               </View>
               <View style={styles.Mood}>
                    <Button containerStyle={styles.ButtonMood}
                        title="Nous écrire"
                        type="clear"
                        icon={
                            <SvgUri
                                width="60"
                                height="60"
                                source={require('../../assets/icones/svg/letter.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', width: '100%' }}
                        onPress={() => this.props.navigation.navigate('With')}
                    />
                    <Button containerStyle={styles.ButtonMood}
                        title="Déconnexion"
                        type="clear"
                        icon={
                            <SvgUri
                                width="60"
                                height="60"
                                source={require('../../assets/icones/svg/exit.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', width: '100%'  }}

                        onPress={() => this.props.navigation.navigate('With')}
                    />

               </View>
               </View>
                
                    
            </View>
            


        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#13172F'
    },

    Mood: {
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5,
        marginRight: 15,
        marginLeft: 15,
    },
    
    ButtonMood: {
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        marginRight: 5,
        marginLeft: 5,
        backgroundColor:'#1C213E',
        
    },
 
    TitleButton:{
        color:'#fff',
        fontWeight: 'bold',
        flexDirection: 'column',
        marginTop: 20,
    },
       Avatar: {
        marginBottom: 30,
        marginTop: -50, 
        justifyContent: "center",
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOpacity: 1,
        borderRadius: 100,
        borderColor: "#fff",
        borderWidth: 4,
        elevation: 20,
        shadowRadius: 10,
        shadowOffset: {
            width: 1,
            height: 1

        }
    },
    container2: {
        flex:1,
        alignItems: 'center',
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


    TitleButton:{
        color:'#fff',
        flexDirection: 'column',
        marginTop: 20,
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