import React from 'react';
import {
    View,
    StyleSheet, TouchableOpacity
} from 'react-native';
import { Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgUri from 'react-native-svg-uri';
import {connect} from 'react-redux';

class TypeScreen extends React.Component {

    constructor(){
        super();
        this.state = {
          onSelectClick: '',
        }
      }

    navigationAndSelect = (toto) => {
        this.props.onSelectClick(toto)
        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            // // // // // View Principale  // // // // // //
            <View style={styles.container}>
                <Header  // // // // // // //  Header
                    barStyle="light-content"
                    leftComponent={<Icon style={{ marginLeft: 10 }}
                        name='chevron-left'
                        size={25}
                        color='#fff'
                        onPress={() => this.props.navigation.goBack()} />}
                    centerComponent={{ text: 'Type ?', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                    containerStyle={{ backgroundColor: '#13172F', justifyContent: 'space-around', borderBottomColor: '#13172F' }}
                />
                {/***************************** Boutons ********************************/}
                <View style={styles.Mood}>
                    <Button containerStyle={styles.ButtonMood}
                        title="Films"
                        type="clear"
                        icon={
                            <SvgUri
                                width="60"
                                height="60"
                                source={require('../../assets/icones/svg/video-camera.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ justifyContent: 'center', flex: 1, alignItems: 'center', }}
                        onPress={() => this.navigationAndSelect("film")}
                    />
                </View>
                <View style={styles.Mood}>

                    <Button containerStyle={styles.ButtonMood}
                        title="Series"
                        type="clear"
                        icon={
                            <SvgUri
                                width="60"
                                height="60"
                                source={require('../../assets/icones/svg/screen.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ justifyContent: 'center', flex: 1, alignItems: 'center', }}
                        onPress={() => this.navigationAndSelect("film")}
                    />
                </View>
                <View style={styles.Mood}>

                    <Button containerStyle={styles.ButtonMood}
                        title="Au cinéma"
                        type="clear"
                        icon={
                            <SvgUri
                                width="60"
                                height="60"
                                source={require('../../assets/icones/svg/film-reel.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ justifyContent: 'center', flex: 1, alignItems: 'center', }}
                        onPress={() => this.navigationAndSelect("film")}
                    />

                </View>

            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
     onSelectClick: function(typeState) { 
       dispatch( {type: 'type', format : typeState} ) 
     }
    }
   }

export default connect(
    null, 
    mapDispatchToProps
  )(TypeScreen);

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#13172F',
        justifyContent: 'flex-start'
    },
    Mood: {
        height: '13%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginRight: 15,
        marginLeft: 15,
    },

    ButtonMood: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
        marginLeft: 5,
        backgroundColor: '#1C213E',

    },
    TitleButton: {
        color: '#fff',
        fontWeight: 'bold',
        flexDirection: 'column',
        marginLeft: 20,
    }




});
