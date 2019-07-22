import React from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
} from 'react-native';
import { Button, Header, Avatar, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgUri from 'react-native-svg-uri';

export default class LoginScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                

                <View style={styles.profile}>

                    <Avatar containerStyle={styles.Avatar}
                        size={65}
                        rounded

                        source={{
                            uri:
                                'https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/58659893_3214554075237045_7885584668697821184_o.jpg?_nc_cat=111&_nc_oc=AQlQdsbEKXbzMhGLuqKiqAPMssArWGyPg0nPELRgjqnkoXy1GijksMGC06DISd_arfE&_nc_ht=scontent-bru2-1.xx&oh=2a82b6328bce5aafd9c3e6957bbca2aa&oe=5DE9B389',
                        }}
                        showEditButton
                    />
                    <View>
                        <Text h4 h4Style={{ fontSize: 18, color: '#7A8B97', textAlign: 'left' }}>Hello</Text>
                        <Text h4 h4Style={{ fontSize: 18, color: '#fff', fontWeight: 'bold', textAlign: 'left' }}>Romain</Text>
                    </View>
                    
                </View>
                    <View style={styles.Mood}>
                        
                        <Button containerStyle={styles.ButtonMood}
                            title="Mon Mood"
                            type="clear"

                            icon={

                                <SvgUri
                                    width="50"
                                    height="50"
                                    source={require('../../assets/icones/svg/cinema/008-superhero-5.svg')}
                                />

                            }
                            titleStyle={styles.TitleButton}
                            buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%' }}
                            onPress={() => this.props.navigation.navigate('With')}
                        />
                    <Button containerStyle={styles.ButtonMood}
                        title="FeceFeelM"
                        type="clear"
                        icon={
                            <SvgUri
                                width="50"
                                height="50"
                                source={require('../../assets/icones/svg/cinema/012-superhero-8.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%' }}
                        onPress={() => this.props.navigation.navigate('With')}
                    />
                    </View>
                <View style={styles.Mood}>

                    <Button containerStyle={styles.ButtonMood}
                        title="Wishlist"
                        type="clear"

                        icon={

                            <SvgUri
                                width="50"
                                height="50"
                                source={require('../../assets/icones/svg/cinema/034-tickets.svg')}
                            />

                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%' }}
                        onPress={() => this.props.navigation.navigate('With')}
                    />
                    <Button containerStyle={styles.ButtonMood}
                        title="Rechercher"
                        type="clear"
                        icon={
                            <SvgUri
                                width="50"
                                height="50"
                                source={require('../../assets/icones/svg/cinema/035-robot.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%' }}
                        onPress={() => this.props.navigation.navigate('With')}
                    />
                </View>
                <View style={styles.Mood}>

                    <Button containerStyle={styles.ButtonMood}
                        title="Top Films"
                        type="clear"

                        icon={

                            <SvgUri
                                width="50"
                                height="50"
                                source={require('../../assets/icones/svg/cinema/019-superhero-13.svg')}
                            />

                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%' }}
                        onPress={() => this.props.navigation.navigate('With')}
                    />
                    <Button containerStyle={styles.ButtonMood}
                        title="Box Office"
                        type="clear"
                        icon={
                            <SvgUri
                                width="50"
                                height="50"
                                source={require('../../assets/icones/svg/cinema/014-clapperboard-1.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%' }}
                        onPress={() => this.props.navigation.navigate('With')}
                    />
                </View>
                <View style={styles.Mood}>

                    <Button containerStyle={styles.ButtonMood}
                        title="Stats"
                        type="clear"

                        icon={

                            <SvgUri
                                width="50"
                                height="50"
                                source={require('../../assets/icones/svg/cinema/023-negative.svg')}
                            />

                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%' }}
                        onPress={() => this.props.navigation.navigate('With')}
                    />
                    <Button containerStyle={styles.ButtonMood}
                        title="Paramètres"
                        type="clear"
                        icon={
                            <SvgUri
                                width="50"
                                height="50"
                                source={require('../../assets/icones/svg/cinema/036-robot-1.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%' }}
                        onPress={() => this.props.navigation.navigate('With')}
                    />
                </View>
                <View style={styles.Mood}>

                    <Button containerStyle={styles.ButtonLogout}
                        title="Se déconnecter"
                        type="clear"
                        icon={
                            <SvgUri
                                width="25"
                                height="25"
                                source={require('../../assets/icones/svg/cinema/logout.svg')}
                            />
                        }
                        titleStyle={styles.Logout}
                        buttonStyle={{ flexDirection: 'row', flex: 1, width: '100%', alignItems:'center', justifyContent:'flex-start' }}
                        onPress={() => this.props.navigation.navigate('Login')}
                    />
                </View>
                   
                </View>
           
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#13172F'
    },
    profile: {
        marginTop:50,
        height: '15%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    Avatar: {
        marginTop: 10,
        marginRight: 30,
        marginLeft: 30,
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
    Mood: {
        height: '12%',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
    },

    ButtonMood: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: '#1C213E',

    },
    ButtonLogout: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100%',
        width: '100%',
        marginRight: 15,
        marginLeft: 15,

    },
    TitleButton: {
        color: '#fff',
        flexDirection: 'column',
        marginTop: 10,
    },
    Logout: {
        color: '#fff',
        flexDirection: 'column',
        fontSize: 16,
        marginLeft : 20,
    }



});