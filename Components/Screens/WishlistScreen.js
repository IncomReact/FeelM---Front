import React from 'react';
import {
    View,
    StyleSheet, Text, Image, ScrollView
} from 'react-native';
import { Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgUri from 'react-native-svg-uri';
import { DrawerActions } from 'react-navigation';
import { connect } from 'react-redux';

class WishlistScreen extends React.Component {
    render() {


       var filmWishlist = this.props.wishlist.map((data, i) => {
           console.log('ici data =====>>>',data)
        return (
            <View style={{flex:1,borderBottomColor: '#fff',
            borderBottomWidth: 1, marginBottom:15, flexDirection:'row' }} key={i}>
              
            <Image  style={styles.WishlistImage} source={{uri: 'https://image.tmdb.org/t/p/w500' + data.films.poster_path}} />
            
                <Text style={{color:'#fff' ,fontSize:14, fontWeight:'600', marginTop:5}}>Note: {data.films.vote_average}</Text>
                
                <Text style={{color:'#fff' ,fontSize:14, fontWeight:'600', marginTop:5, width:'50%'}}>Synopsis {data.films.overview.substr(0,120)+"..."}</Text>
                <Text style={{color:'#fff' ,fontSize:18, fontWeight:'900', marginTop:5}}> {data.films.title}</Text> 

            </View> 
        )
        })

        return (
            <View style={styles.container}>
            <Header  // // // // // // //  Header
                    barStyle="light-content"
                    leftComponent={<Icon style={{ marginLeft: 10 }}
                        name='chevron-left'
                        size={25}
                        color='#fff'
                        onPress={() => this.props.navigation.goBack()} />}
                    centerComponent={{ text: 'Wishlist', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }} 
                    containerStyle={{ backgroundColor: 'rgba(19,23,47,0)', justifyContent: 'space-around', borderBottomColor: 'rgba(19,23,47,0)', zIndex: 100 }}
                />

                     
                       
                     {filmWishlist}
                     


              </View> 
              


        );
    }
    }

    function mapStateToProps(state) {
        console.log('STATATATATATEEEEEEE =====>>>>>',state) 
        return {wishlist : state.wishlistData}
       }

    export default connect(
        mapStateToProps, 
        null
      )(WishlistScreen);

    const styles = StyleSheet.create({
        container:{
        flex: 1,
        backgroundColor: 'rgba(19,23,47,1)',
        },

        scroll:{
            width:'80%'
            },

        WishlistImage: {
            
        width: 100,
        height: 150,
        marginBottom:20,
        marginRight: 5,
        marginLeft: 5,
        },
        
    });
