import React from 'react';
import {
    View,
    StyleSheet, TouchableOpacity, Image, ScrollView
} from 'react-native';
import { Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgUri from 'react-native-svg-uri';
import { DrawerActions } from 'react-navigation';

export default class BoxOfficeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <Header  // // // // // // //  Header
                    barStyle="light-content"
                    leftComponent={<Icon style={{ marginLeft: 10 }}
                        name='chevron-left'
                        size={25}
                        color='#fff'
                        onPress={() => this.props.navigation.goBack()} />}
                    centerComponent={{ text: 'Box Office', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                    rightComponent={<Icon style={{ marginRight: 10 }}
                        name='home'
                        size={22}
                        color='#fff'
                        onPress={() => this.props.navigation.navigate('Home')} />}
                    containerStyle={{ backgroundColor: 'rgba(19,23,47,0)', justifyContent: 'space-around', borderBottomColor: 'rgba(19,23,47,0)', zIndex: 100 }}
                />

                <ScrollView >
                 <View style={styles.scroll}>    
                <Image style={styles.ButtonMood} source={require('../../assets/aff1.jpg')}/>
                <Image style={styles.ButtonMood} source={require('../../assets/aff2.jpg')}/>
                <Image style={styles.ButtonMood} source={require('../../assets/aff3.jpg')}/>
                <Image style={styles.ButtonMood} source={require('../../assets/aff4.jpg')}/>
                <Image style={styles.ButtonMood} source={require('../../assets/aff5.jpg')}/>
                <Image style={styles.ButtonMood} source={require('../../assets/aff1.jpg')}/>
                </View>   
           </ScrollView>


          </View> 
          


    );
}
}

const styles = StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: 'rgba(19,23,47,1)',
    },

    scroll:{
        flex:5,
        height:"100%",
        alignContent:"space-around",
        justifyContent:"flex-start",
        flexDirection:"row"
        },

    ButtonMood: {
        
    width: 90,
    height: 150,

    marginRight: 5,
    marginLeft: 5,
    },
    
});