import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image, Animated, ActivityIndicator
} from 'react-native';
import { Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgUri from 'react-native-svg-uri';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { LinearGradient } from 'expo-linear-gradient';
import { DrawerActions } from 'react-navigation';
import LottieView from 'lottie-react-native';
import { connect } from 'react-redux';
import AnimatedLoader from "react-native-animated-loader";

class HomeScreen extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            movies: [],
            status: null,
            nSelectClick: '',
            visible: false
        };
    }
    
    componentWillMount() {
        this.setState({ status: 'Chargement des films en cours ...' });
        
    };
    navigationAndSelect = () => {
        this.setState({
            visible: !this.state.visible
        });
        setTimeout(() => {
            this.setState({
                visible: false
            });
        }, 1000, );
    }
    render() {

        
        // console.log('========== Mood Redux ', this.props.filterData);
        // // this.props.LesFilms.map((cat, b) => {
        // //     console.log('========== Catégories', cat.films.cat);
        // // })
        // this.props.Movies.map((mood, b) => {
        //     console.log('========== Mood Mongo DB', mood.films.mood);
        // })
        // this.props.Movies.map((avec, b) => {
        //     console.log('========== Avec qui Mongo DB', avec.films.avec_qui);
        // })
       
        var filmsCard = this.props.Movies.map((data, i) => {

            var arr1 = data.films.mood;
            var arr2 = data.films.avec_qui;
            var arr3 = this.props.filterData;
            var arr4 = data.films.cat
            console.log('mood ======== ', arr1);
            console.log('avec_qui ============', arr2);
            console.log('filterData ======== ', arr3);
            console.log('cat ============', arr4);
            for (let b = 0; b < arr1.length; b++) {
                arr1
  

            // for (let c = 0; c < arr2.length; c++) {
            //     console.log(arr2);
            //     arr2
            // }

            // for (let a = 0; a < arr3.length; a++) {
            //     console.log(arr3);
                
            // }
            
            if (arr1[b] === arr3[0] && arr2[1] === arr2[i] && arr4 === arr3[2]) {
                
                return (
                    <Card key={i}><Image IMG={data.films.poster_path} style={styles.card} source={{ uri: 'https://image.tmdb.org/t/p/w500' + data.films.poster_path }} /></Card>
                )
            } 
                
            }
            // if (arr1[i] === arr2 === arr3) {
            //     console.log('OUI');
            // } else {
            //     console.log('NON');
            // }
            console.log(data.films.poster_path);
            
            })
        console.log('Images ...', this.state.movies);
        

        // 
        return (
            <View style={styles.container}>
                
                <Header  // // // // // // // // // // // // // //   Header  // // // // // // //  // // // // // // // 
                    barStyle="light-content"
                    leftComponent={<Button containerStyle={styles.ButtonMood}
                        type="clear"
                        onPress={() => { this.props.navigation.toggleDrawer() }}
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
                <AnimatedLoader
                    visible={this.state.visible}
                    overlayColor="rgba(19,23,47,0.9)"
                    source={require("./star.json")}
                    animationStyle={styles.lottie}
                    speed={1}
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
                    renderNoMoreCards={() => 
                        <View>
                            <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray' }}>Aucun film à proposer :( </Text>
                            
                        </View>
                    }  
                    ref={swiper => {
                        this.swiper = swiper
                    }}
                        disableBottomSwipe={true}
                        disableTopSwipe={true}
                        onSwiped={() => console.log()}
                        onSwipedLeft={() => console.log('onSwipedLeft')}
                >
                        {filmsCard.sort(function (a, b) { return 0.5 - Math.random() })}

                </CardStack>
                        <Image style={{ width: '100%', height: '100%', marginTop: -200, zIndex: -100, opacity: 0.2,  }} source={require('../../assets/fil_BG.jpg')} />
                      
                <View style={{alignItems:'center'}}>  
                        
                <View style={styles.footer}>
                            
                            <TouchableOpacity style={[styles.button, styles.red]} onPress={() => {
                                this.swiper.swipeLeft();
                            }}>
                                <SvgUri source={require('../../assets/close.svg')} width="28"
                                    height="28" />
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, styles.orange]}
                                onPress={() => this.props.navigation.navigate('Film')} >
                                <SvgUri source={require('../../assets/play.svg')} width="40"
                                    height="40" style={{ marginLeft: 5, }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, styles.green]} onPress={() => {
                                this.swiper.swipeRight();
                            }}>
                                <SvgUri source={require('../../assets/check-mark.svg')} width="28"
                                    height="28" />
                            </TouchableOpacity>


               </View>
               <View style={styles.footer2}>
                             
                        <TouchableOpacity style={[styles.button, styles.blue]} onPress={() => {
                            this.swiper.goBackFromLeft();
                        }}>
                            <SvgUri source={require('../../assets/icones/svg/go-back.svg')} width="28"
                                height="28" />
                        </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} style={[styles.button, styles.yellow]} onPress={() => this.navigationAndSelect("Favoris")
                        }>
                            <SvgUri source={require('../../assets/icones/svg/fav.svg')} width="28"
                                height="28" />
                        </TouchableOpacity>
                </View> 
             </View>   
                           
                </View>
               
                </View>
                        
            
        );
    }
}


function mapStateToProps(state) {
    return { Movies: state.filmData, filterData: state.filterData };
}

export default connect(mapStateToProps, null)(HomeScreen);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#13172F'
    },
    lottie: {
        width: 300,
        height: 300,
        zIndex: -100,
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
       marginTop:-20,
        width: 300,
        height: 470,
        borderRadius: 10,
        shadowColor: 'rgba(19,23,47,1)',
        shadowOffset: {
            width: 5,
            height: 10
        },
        shadowOpacity: 1,
    },
    card1: {
        backgroundColor: '#FE474C',
    },
    card2: {
        backgroundColor: '#FEB12C',
    },
    
    footer: {
        marginTop: -20,
        width: 220,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 10000
    },
    footer2: {
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'row',
        zIndex: 10000
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
    },
    yellow: {
        width: 50,
        height: 50,
        backgroundColor: '#E5C92F',
        borderRadius: 75,
        borderWidth: 6,
        marginLeft:15,
        borderColor: '#E5C92F',
    },
    blue: {
        width: 50,
        height: 50,
        backgroundColor: '#1C213E',
        borderRadius: 75,
        borderWidth: 6,
        marginRight:15,
        borderColor: '#1C213E',
    }
});