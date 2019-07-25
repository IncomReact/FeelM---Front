import React from 'react';
import {
    View,
    StyleSheet, TouchableOpacity
} from 'react-native';
import { Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgUri from 'react-native-svg-uri';
import {connect} from 'react-redux';

class MoodScreen extends React.Component {

    constructor(){
        super();
        this.state = {
          onSelectClick: '',
        }
      }

    navigationAndSelect = (toto) => {
        this.props.onSelectClick(toto)
        this.props.navigation.navigate('With')
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
                    centerComponent={{ text: 'TON MOOD ?', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                    rightComponent={<Icon style={{ marginRight: 10 }}
                        name='camera'
                        size={22}
                        color='#fff'
                        onPress={() => this.props.navigation.navigate('FaceFeelM')} />}
                    containerStyle={{ backgroundColor: '#13172F', justifyContent: 'space-around', borderBottomColor: '#13172F' }}
                />
                <View style={styles.Mood}>
                    <Button containerStyle={styles.ButtonMood}
                        title="Heureux"
                        type="clear"
                        icon={
                            <SvgUri
                                width="70"
                                height="70"
                                source={require('../../assets/icones/svg/006-happy.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%' }}
                        onPress={() => this.navigationAndSelect("heureux")}
                    />
                    <Button containerStyle={styles.ButtonMood}
                        title="Triste"
                        type="clear"
                        
                        icon={
                            
                            <SvgUri
                                width="70"
                                height="70"
                                source={require('../../assets/icones/svg/004-crying-1.svg')}
                            />
                           
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%' }}
                        onPress={() => this.navigationAndSelect("triste")}
                    />
                </View>
                <View style={styles.Mood}>
                    <Button containerStyle={styles.ButtonMood}
                        title="Etat second"
                        type="clear"
                        icon={
                            <SvgUri
                                width="70"
                                height="70"
                                source={require('../../assets/icones/svg/023-tongue-out.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%' }}
                        onPress={() => this.navigationAndSelect("second")}
                    />
                    <Button containerStyle={styles.ButtonMood}
                        title="S’endormir"
                        type="clear"
                        icon={
                            <SvgUri
                                width="70"
                                height="70"
                                source={require('../../assets/icones/svg/020-sleepy.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%' }}
                        onPress={() => this.navigationAndSelect("endormir")}
                    />
                </View>
                <View style={styles.Mood}>
                    <Button containerStyle={styles.ButtonMood}
                        title="Réfléchir"
                        type="clear"
                        icon={
                            <SvgUri
                                width="70"
                                height="70"
                                source={require('../../assets/icones/svg/007-happy-1.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%' }}
                        onPress={() => this.navigationAndSelect("réfléchir")}
                    />
                    <Button containerStyle={styles.ButtonMood}
                        title="Être surpris"
                        type="clear"
                        icon={
                            <SvgUri
                                width="70"
                                height="70"
                                source={require('../../assets/icones/svg/016-shocked.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%'  }}

                        onPress={() => this.navigationAndSelect("surpris")}
                    />
                    </View>

                    <View style={styles.Mood}>
                    <Button containerStyle={styles.ButtonMood}
                        title="Pas prise de tête"
                        type="clear"
                        icon={
                            <SvgUri
                                width="70"
                                height="70"
                                source={require('../../assets/icones/svg/016-shocked.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%'  }}

                        onPress={() => this.navigationAndSelect("tete")}
                    />
                    <Button containerStyle={styles.ButtonMood}
                        title="Evasion"
                        type="clear"
                        icon={
                            <SvgUri
                                width="70"
                                height="70"
                                source={require('../../assets/icones/svg/016-shocked.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%'  }}

                        onPress={() => this.navigationAndSelect("evasion")}
                    />
                </View>
                
               
                </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
     onSelectClick: function(moodState) { 
       dispatch( {type: 'mood', mood : moodState} ) 
     }
    }
   }

export default connect(
    null, 
    mapDispatchToProps
  )(MoodScreen);

const styles = StyleSheet.create({

    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor:'#13172F'
    },
    Mood: {
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginRight: 15,
        marginLeft: 15,
    },
    
    ButtonMood: {
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        height : '100%',
        width:'100%',
        marginRight: 5,
        marginLeft: 5,
        backgroundColor:'#1C213E',

    },
    TitleButton:{
        color:'#fff',
        fontWeight: 'bold',
        flexDirection: 'column',
        marginTop: 20,
    }
    



});