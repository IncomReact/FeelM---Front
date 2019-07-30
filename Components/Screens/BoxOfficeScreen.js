import React from 'react';
import {
    View,
    StyleSheet, TouchableOpacity, Image, ScrollView, Text, FlatList, Dimensions
} from 'react-native';
import { Button, Header, ListItem, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgUri from 'react-native-svg-uri';
import { DrawerActions } from 'react-navigation';
import { connect } from 'react-redux';
import Moment from 'moment';




class NowFilmScreen extends React.Component {
    render() {

        var nowFilms = this.props.nowFilms.map((data, i) => {

            var date = new Date(data.films.release_date);
            // var filtreAnnee = new Date('July 20, 10 00:20:18')
            var anneeSortie = date.getFullYear()
            var moisSortie = date.getMonth()
            var moisDate = 5
            var anneeDate = 2019

            console.log('FILTRE ----->', data.films.title, anneeSortie, moisSortie)

            // var dateSortie = Moment(data.films.release_date).format('DD-MM-YYYY')

            if (data.films.cat == "cinema" && anneeSortie == anneeDate && moisSortie > moisDate) {
                console.log(data.films.cat == "cinema" && anneeSortie == anneeDate && moisSortie > moisDate)
                return (


                    <View key={i}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Film')} >
                            <Image
                                style={styles.image}
                                source={{ uri: 'https://image.tmdb.org/t/p/w500' + data.films.poster_path }}
                            />
                        </TouchableOpacity>

                    </View>

                )
            }


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
                    centerComponent={{ text: "A l'affiche", style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                    containerStyle={{ backgroundColor: 'rgba(19,23,47,0)', justifyContent: 'space-around', borderBottomColor: 'rgba(19,23,47,0)', zIndex: 100 }}
                />

                <ScrollView>

                    <Text style={styles.titre}>En ce moment au cinéma</Text>


                    <View style={styles.content}>
                        {nowFilms}
                    </View>


                </ScrollView>


            </View>


        )

    }

}


function mapStateToProps(state) {
    return { nowFilms: state.filmData }
}

export default connect(
    mapStateToProps,
    null
)(NowFilmScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(19,23,47,1)',
    },

    titre: {
        marginLeft: 10,
        marginRight: 5,
        backgroundColor: '#1C213E',
        fontSize: 22,
        fontWeight: '800',
        color: '#fff',
        marginBottom: 10,
        marginTop: 20,
        padding: 5,
        width: 'auto'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    image: {
        width: 180,
        height: 250,
        margin: 5,
        borderRadius: 5
    }

});