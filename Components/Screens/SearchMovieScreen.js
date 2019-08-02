import React from 'react';
import {
  View,
  StyleSheet, TouchableOpacity, Image, ScrollView, Text
} from 'react-native';
import { Button, Header, SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgUri from 'react-native-svg-uri';
import { DrawerActions } from 'react-navigation';
import { Col, Row, Grid } from "react-native-easy-grid";
import Autocomplete from 'react-native-autocomplete-input';
import { connect } from 'react-redux';

class SearchMovieScreen extends React.Component {

  constructor(props) {
    super(props);
    //Initialization of state
    //films will contain the array of suggestion
    //query will have the input from the autocomplete input
    this.state = {
      films: [],
      query: '',

    };
  }

  componentDidMount() {
    var searchMovies = this.props.searchMovies.map((data, i) => {

      return (

        {
          key: "otot" + i,
          title: data.films.title,
          poster: data.films.poster_path
        }
      )

    })


    this.setState({ films: searchMovies })

  }


  findFilm(query) {
    //method called everytime when we change the value of the input
    if (query === '') {
      //if the query is null then return blank
      return [];
    }

    const { films } = this.state;
    //making a case insensitive regular expression to get similar value from the film json
    const regex = new RegExp(`${query.trim()}`, 'i');
    //return the filtered film array according the query from the input
    return films.filter(film => film.title.search(regex) >= 0);
  }




  render() {
    const { query } = this.state;
    const films = this.findFilm(query);
    console.log("TCL: SearchMovieScreen -> render -> films", films)

    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
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
        {/* <SearchBar
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
              /> */}

        <ScrollView >
          <Autocomplete
            autoCapitalize="none"
            autoCorrect={false}
            containerStyle={styles.autocompleteContainer}
            //data to show in suggestion
            data={films.length === 1 && comp(query, films[0].title) ? [] : films}
            //default value if you want to set something in input
            defaultValue={this.state.query}
            /*onchange of the text changing the state of the query which will trigger
            the findFilm method to show the suggestions*/
            onChangeText={text => this.setState({ query: text })}
            placeholder="Nom de film ou série"
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => this.setState({ query: title })}>
                <Text style={styles.itemText}>
                  {console.log("title films ----------->", item.title, item.poster)}
                  {item.title} {item.poster}
                </Text>
              </TouchableOpacity>
            )
            }
          />
          <View style={styles.descriptionContainer}>
            {films.length > 0 ? (
              <Text style={styles.infoText}>{this.state.query}</Text>
            ) : (
                <Text style={styles.infoText}></Text>
              )}
          </View>






        </ScrollView>


      </View>



    );
  }
}


function mapStateToProps(state) {
  return { searchMovies: state.filmData }

}
export default connect(mapStateToProps, null)(SearchMovieScreen);





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(19,23,47,1)'
  },

  autocompleteContainer: {
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#ffffff',
    borderWidth: 0,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 2,
    color: "#000"
  },
  infoText: {
    textAlign: 'center',
    fontSize: 16,
    color: "#000"
  },


  //     scroll:{ 
  //         marginTop:15,
  //        marginRight: 15,
  //         marginLeft: 15,
  //         justifyContent:"space-between",
  //         flexDirection:"row"
  //         },

  //     ButtonMood: {

  //     width: 90,
  //     height: 150,

  //     marginRight: 5,
  //     marginLeft: 5,
  //     },
  //     content:{


  //     }
});
