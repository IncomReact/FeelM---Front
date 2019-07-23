import React from 'react';
import {
    View,
    StyleSheet, TouchableOpacity, Image, ScrollView
} from 'react-native';
import { Button, Header, SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgUri from 'react-native-svg-uri';
import { DrawerActions } from 'react-navigation';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class SearchMovieScreen extends React.Component {
    state = {
        search: '',
      };
    
      updateSearch = search => {
        this.setState({ search });
      };
    render() {
        const { search } = this.state;
        return (
            <View style={styles.container}>
            <Header  // // // // // // //  Header
                    barStyle="light-content"
                    leftComponent={<Icon style={{ marginLeft: 10 }}
                        name='chevron-left'
                        size={25}
                        color='#fff'
                        onPress={() => this.props.navigation.goBack()} />}
                    
                    centerComponent={{ text: 'Recherche', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }} 
                    containerStyle={{ backgroundColor: 'rgba(19,23,47,0)', justifyContent: 'space-around', borderBottomColor: 'rgba(19,23,47,0)', zIndex: 100 }}
                />
                <SearchBar
    
                    containerStyle={{
                        backgroundColor: 'rgba(19,23,47,1)', marginTop: 10, marginBottom: 10, borderRadius: 20, marginRight: 15,
                        marginLeft: 15,}}   
                    inputContainerStyle={{backgroundColor: '#fff'}}
                    inputStyle={{backgroundColor: '#fff'}}
                    placeholder="Chercher un film..."
                    onChangeText={this.updateSearch}
                    value={search}
                    searchIcon={<Icon style={{ marginLeft: 10 }}
                        name='film'
                        size={20}
                        color='rgba(19,23,47,1)'
                        />}

                  />

                    <ScrollView >
                      
                       {/* <View style={styles.scroll}>     */}
                       <View style={styles.scroll}>
                    <Image style={styles.ButtonMood} source={require('../../assets/aff1.jpg')}/>
                    <Image style={styles.ButtonMood} source={require('../../assets/aff2.jpg')}/>
                    <Image style={styles.ButtonMood} source={require('../../assets/aff3.jpg')}/>
                    </View>
                    <View  style={styles.scroll}>
                    <Image style={styles.ButtonMood} source={require('../../assets/aff4.jpg')}/>
                    <Image style={styles.ButtonMood} source={require('../../assets/aff5.jpg')}/>
                    <Image style={styles.ButtonMood} source={require('../../assets/aff1.jpg')}/>
                    </View>
                    <View style={styles.scroll}>
                    <Image style={styles.ButtonMood} source={require('../../assets/aff4.jpg')}/>
                    <Image style={styles.ButtonMood} source={require('../../assets/aff5.jpg')}/>
                    <Image style={styles.ButtonMood} source={require('../../assets/aff1.jpg')}/>
                    </View>
                    <View  style={styles.scroll}>
                    <Image style={styles.ButtonMood} source={require('../../assets/aff4.jpg')}/>
                    <Image style={styles.ButtonMood} source={require('../../assets/aff5.jpg')}/>
                    <Image style={styles.ButtonMood} source={require('../../assets/aff1.jpg')}/>
                    </View>
                    <View  style={styles.scroll}>
                    <Image style={styles.ButtonMood} source={require('../../assets/aff4.jpg')}/>
                    <Image style={styles.ButtonMood} source={require('../../assets/aff5.jpg')}/>
                    <Image style={styles.ButtonMood} source={require('../../assets/aff1.jpg')}/>
                    </View>
                    <View  style={styles.scroll}>
                    <Image style={styles.ButtonMood} source={require('../../assets/aff4.jpg')}/>
                    <Image style={styles.ButtonMood} source={require('../../assets/aff5.jpg')}/>
                    <Image style={styles.ButtonMood} source={require('../../assets/aff1.jpg')}/>
                    </View>
                    <View  style={styles.scroll}>
                    <Image style={styles.ButtonMood} source={require('../../assets/aff4.jpg')}/>
                    <Image style={styles.ButtonMood} source={require('../../assets/aff5.jpg')}/>
                    <Image style={styles.ButtonMood} source={require('../../assets/aff1.jpg')}/>
                    </View>
                  

                    {/* </View>    */}
                      
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
            marginTop:15,
           marginRight: 15,
            marginLeft: 15,
            justifyContent:"space-between",
            flexDirection:"row"
            },

        ButtonMood: {
            
        width: 90,
        height: 150,

        marginRight: 5,
        marginLeft: 5,
        },
        content:{
           
            
        }
    });