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




class TopFilmScreen extends React.Component {
    render() {

        var topFilms = this.props.topFilms.map((data, i) => {

            if (data.films.vote_average > 8.4) {

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

        var topFilmsWithFriends = this.props.topFilms.map((data, i) => {
            console.log('ici data =====>>>', data)

            if (data.films.vote_average > 7 && data.films.avec_qui == "amis") {

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

        var topFilmsWith = this.props.topFilms.map((data, i) => {
            console.log('ici data =====>>>', data)

            if (data.films.vote_average > 7 && data.films.avec_qui == "compagnon") {

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

        var topFilmsAlone = this.props.topFilms.map((data, i) => {
            console.log('ici data =====>>>', data)

            if (data.films.vote_average > 7 && data.films.avec_qui == "seul") {

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

        var topFilmsWithFamily = this.props.topFilms.map((data, i) => {
            console.log('ici data =====>>>', data)

            if (data.films.vote_average > 7 && data.films.avec_qui == "famille") {

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

        var topFilmsWithChildren = this.props.topFilms.map((data, i) => {
            console.log('ici data =====>>>', data)

            if (data.films.vote_average > 7 && data.films.avec_qui == "enfants") {

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
                    centerComponent={{ text: 'Top Films', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                    containerStyle={{ backgroundColor: 'rgba(19,23,47,0)', justifyContent: 'space-around', borderBottomColor: 'rgba(19,23,47,0)', zIndex: 100 }}
                />

                <ScrollView>

                    <Text style={styles.titre}>Best Films</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <View style={styles.content}>
                            {topFilms}
                        </View>
                    </ScrollView>

                    <Text style={styles.titre}>Avec mes Amis</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <View style={styles.content}>
                            {topFilmsWithFriends}
                        </View>
                    </ScrollView>

                    <Text style={styles.titre}>En Amoureux</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <View style={styles.content}>
                            {topFilmsWith}
                        </View>
                    </ScrollView>

                    <Text style={styles.titre}>Seul</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <View style={styles.content}>
                            {topFilmsAlone}
                        </View>
                    </ScrollView>

                    <Text style={styles.titre}>En Famille</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <View style={styles.content}>
                            {topFilmsWithFamily}
                        </View>
                    </ScrollView>

                    <Text style={styles.titre}>En Famille</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <View style={styles.content}>
                            {topFilmsWithChildren}
                        </View>
                    </ScrollView>

                </ScrollView>


            </View>


        )

    }

}


function mapStateToProps(state) {
    return { topFilms: state.filmData }
}

export default connect(
    mapStateToProps,
    null
)(TopFilmScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(19,23,47,1)',
    },

    titre: {
        marginLeft: 20,
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
        marginLeft: 15
    },
    image: {
        width: 100,
        height: 150,
        margin: 5,
        borderRadius: 5
    }

});