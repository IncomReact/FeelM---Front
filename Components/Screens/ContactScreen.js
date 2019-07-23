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
import t from "tcomb-form-native";



export default class ContactScreen extends React.Component {

    render() {
        return (
            <KeyboardAvoidingView style={{flex: 1}}>
           
            <ImageBackground source={require('../../assets/bg_drawer.jpg')} style={{ width: '100%', height: '100%' }}>
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
                    
                    containerStyle={{ backgroundColor: 'rgba(19,23,47,0)', justifyContent: 'space-around', borderBottomColor: 'rgba(19,23,47,0)', zIndex: 100 }}
                />

               
                <ScrollView style={styles.container}>
                <Text style={styles.titre}>Votre Message</Text>

                <TextInput style={styles.input}
                multiline= {true}
                numberOfLines= {8}
                placeholder='Votre message'
                title= "Votre message"
                

                />
                   
                    
                   
                </ScrollView>
                <View>
                <Button style={styles.button}
                        title="Envoyer"
                        type= "clear"
                        titleStyle={{color: "#FFF"}}
                         />
                </View>
                
            </ImageBackground>
            </KeyboardAvoidingView>
            
        );
    }
}

const styles = StyleSheet.create({

    container: {
        width: 320,
        height: 300,
        
        backgroundColor: '#13172F',
        marginTop: 100,
        marginRight: 15,
        marginLeft: 27,
        
    },
   input:{
       height: 200,
       width: "100%",
       padding: 15,
       marginTop: 20,
       marginBottom: 50,
       color:  "#FFF",
       borderWidth: 1,
       borderColor: "#FFF"

   },
    titre:{
        marginTop: 20,
        fontSize: 28,
        color: "#FFF",
        textAlign: "center"

    },
   button:{
       marginHorizontal: 28,
       marginBottom: 100,
       backgroundColor: "#3DB39E",
       color: "#FFF"

   }

});
