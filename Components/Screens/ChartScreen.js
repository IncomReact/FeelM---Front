import React from 'react';
import {
    View,
    StyleSheet, TouchableOpacity, StatusBar, Text,
} from 'react-native';
import { Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgUri from 'react-native-svg-uri';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import AnimatedLoader from "react-native-animated-loader";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from 'react-native-chart-kit'
import FusionCharts from 'react-native-fusioncharts';
class TypeScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            onSelectClick: '',
            visible: false
        }
    }

    navigationAndSelect = (toto) => {
        this.props.onSelectClick(toto)
        this.setState({
            visible: !this.state.visible
        });
        setTimeout(() => {
            this.setState({
                visible: false
            });
            this.props.navigation.navigate('Home')
        }, 2000);



    }

    render() {
        const commitsData = [
            { date: '2079-07-02', count: 1 },
            { date: '2079-07-03', count: 2 },
            { date: '2079-07-04', count: 3 },
            { date: '2079-07-05', count: 4 },
            { date: '2079-07-06', count: 5 },
            { date: '2079-07-22', count: 2 },
            { date: '2079-07-24', count: 3 },
            { date: '2079-07-07', count: 2 },
            { date: '2079-06-02', count: 4 },
            { date: '2079-05-05', count: 2 },
            { date: '2079-05-12', count: 4 },
            { date: '2079-05-13', count: 4 },
            { date: '2079-05-15', count: 4 },
            { date: '2079-05-21', count: 4 }
        ]
        const data = {
            labels: ['Heureux', 'Triste', 'Etat second'], // optional
            data: [0.4, 0.6, 0.8]
        }
        const data2 = [
            { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: 'New York', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
        ]
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
                    centerComponent={{ text: 'Mes statistiques', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                    containerStyle={{ backgroundColor: '#13172F', justifyContent: 'space-around', borderBottomColor: '#13172F' }}
                />
                {/***************************** Boutons ********************************/}
                <Text style={{ color: '#fff', marginTop: 30, marginBottom: 30, textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>
                        Mon Mood
  </Text>
                    <ProgressChart
                        data={data}
                        width={380}
                        height={220}
                        chartConfig={{
                            backgroundColor: '#e26a00',
                            backgroundGradientFrom: '#13172F',
                            backgroundGradientTo: '#13172F',
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 0.2) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16, 
                            }
                        }}
                    />
                    
                
                    <Text style={{ color: '#fff', marginTop: 30, marginBottom: 30, textAlign:'center', fontSize:16, fontWeight:'bold' }}>
                        Mes habitudes
                    </Text>
                    <ContributionGraph
                        values={commitsData}
                        endDate={new Date('2079-07-30')}
                        numDays={105}
                        width={390}
                        height={350}
                        chartConfig={{
                            backgroundColor: '#e26a00',
                            backgroundGradientFrom: '#13172F',
                            backgroundGradientTo: '#13172F',
                            decimalPlaces: 3, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            }
                        }}
                    />
                 
                
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSelectClick: function (typeState) {
            dispatch({ type: 'type', format: typeState })
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
       
    },
    lottie: {
        width: 300,
        height: 300
    },
    Charts: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    Charts2: {
        justifyContent: 'center',
        alignItems: 'center',
   
    },
    spinnerTextStyle: {
        color: '#FFF'
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
