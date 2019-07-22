import React from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
} from 'react-native';
import { SocialIcon } from 'react-native-elements';

export default class LoginScreen extends React.Component {

    render() {
        return (
            <ImageBackground source={require('../../assets/bg_Loggin.jpg')} style={{ width: '100%', height: '100%' }}>
                <View style={styles.container}>

                    <SocialIcon style={styles.facebookConnect}
                        title='Sign In With Facebook'
                        button
                        type='facebook'
                        onPress={() => this.props.navigation.navigate('Mood')}
                    />
                    <SocialIcon style={styles.googleConnect}
                        title='Connect with Email'
                        button
                        iconColor='#DD2E44'
                        fontStyle={{ color:'#000'}}
                        type='envelope'
                    />

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
    },
    facebookConnect: {
        width: '85%',
        marginBottom:20,

    },
    googleConnect: {
        backgroundColor:'#fff',
        width: '85%',
        marginBottom: 90,
    },
    


});