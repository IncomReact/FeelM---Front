import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ImageBackground
} from 'react-native';
import { Button, Header, Tile, Rating } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgUri from 'react-native-svg-uri';
import { LinearGradient } from 'expo-linear-gradient';
import { DrawerActions } from 'react-navigation';
import YoutubeScreen from './YoutubeScreen'

export default class FilmScreen extends Component {

    render() {

        const { rating } = this.props; // Etoiles

        return (
            <View style={styles.container}>

                <Header  // // // // // // //  Header
                    barStyle="light-content"
                    leftComponent={<Icon style={{ marginLeft: 10 }}
                        name='chevron-left'
                        size={25}
                        color='#fff'
                        onPress={() => this.props.navigation.goBack()} />}
                    centerComponent={<Image style={{ width: 110, height: 25, }} source={require('../../assets/logo_feelm.png')} />}
                    containerStyle={{ backgroundColor: 'rgba(19,23,47,0)', justifyContent: 'space-around', borderBottomColor: 'rgba(19,23,47,0)', zIndex: 100 }}
                />
                <View style={styles.featured}>
                    <Tile
                        imageSrc={require('../../assets/fil_BG.jpg')}
                        icon={{ name: 'play-circle', type: 'font-awesome', color: '#fff', size: 50, marginTop: 30 }}
                        featuredxz
                        onPress={() => this.props.navigation.navigate('Youtube')}

                    />

                </View >


                <View style={styles.container2}>
                    <Image
                        source={require('../../assets/aff1.jpg')}
                        style={styles.vignette}
                    />
                    <View>
                        <Text style={styles.h1}>
                            Intouchable
                        </Text>

                        <Text style={styles.infosFilm}>
                            Date de sortie : 02/11/2011
                        </Text>

                        <View style={styles.stars}>
                            <Rating
                                imageSize={25}
                                readonly
                                startingValue={rating}
                                startingValue={4.5}
                                type='custom'
                                tintColor='#13172F'
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.margeInterne}>
                    <View style={styles.content}>
                        <Text style={styles.h2}>
                            Synopsis
                        </Text>
                        <Text style={styles.contentSynopsis}>
                            Le film raconte l'histoire vraie d'un homme riche et handicapé qui aime prendre des risques, l'exemple parfait de l'aristocrate français. Il a perdu sa femme lors d'un accident
                        </Text>
                    </View>

                    <View style={styles.marginLeftContainer}>
                        <Text style={styles.h2}>
                            0ù regarder le film ?
                    </Text>
                    </View>

                    <View style={styles.streamLink}>
                        <Button title="Acheter" style={styles.borderLinkGreen} type="clear"
                            icon={<Icon
                                style={styles.marginIconRight}
                                name="shopping-cart"
                                size={20}
                                color="white"
                            />}
                            titleStyle={{ color: "#fff", fontWeight: 'bold' }}
                            onPress={() => this.props.navigation.navigate('LinkBuy')}
                        />

                        <Button title="Louer" style={styles.borderLinkYellow} type="clear"
                            icon={<Icon
                                style={styles.marginIconRight}
                                name="history"
                                size={20}
                                color="white"
                            />}
                            titleStyle={{ color: "#fff", fontWeight: 'bold' }}
                            onPress={() => this.props.navigation.navigate('LinkVod')}
                        />

                        <Button title="Streaming" style={styles.borderLinkRed} type="clear"
                            icon={<Icon
                                style={styles.marginIconRight}
                                name="play-circle"
                                size={20}
                                color="white"
                            />}
                            titleStyle={{ color: "#fff", fontWeight: 'bold' }}
                            onPress={() => this.props.navigation.navigate('LinkStream')}
                        />

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
        backgroundColor: '#13172F',
    },

    margeInterne: {
        paddingLeft: 20,
        paddingRight: 20
    },
    container2: {
        flexDirection: 'row',
        width: '100%',
        marginTop: -25,
        borderRadius: 25,
        borderColor: "#13172F",
        borderWidth: 1,
        backgroundColor: '#13172F',
        paddingLeft: 20,
        paddingRight: 20
    },
    featured: {
        marginTop: -90,
        zIndex: -10,
        opacity: 0.6,
    },
    vignette: {
        width: 150,
        height: 210,
        marginTop: -80,
    },
    h1: {

        marginLeft: 20,
        color: '#fff',
        fontSize: 26,
        fontWeight: '800',
        marginTop: 25,
    }, h2: {

        color: '#fff',
        fontSize: 26,
        fontWeight: '800',
        marginTop: 25,
    },

    infosFilm: {
        color: '#bdc3c7',
        marginTop: 15,
        marginLeft: 20
    },
    stars: {
        marginTop: 15,
        alignItems: 'flex-start',
        marginLeft: 20
    },
    contentSynopsis: {
        marginTop: 10,
        fontSize: 20,
        color: '#bdc3c7',
    },

    streamLink: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    borderLinkGreen: {
        backgroundColor: '#3DB39E',
        borderRadius: 15,
        width: '100%'
    },
    borderLinkYellow: {
        backgroundColor: '#f9ca24',
        borderRadius: 15,
        width: '100%'
    },
    borderLinkRed: {
        backgroundColor: '#DD2E44',
        borderRadius: 15,
        width: '100%'
    },
    marginIconRight: {
        marginRight: 5
    },
});
