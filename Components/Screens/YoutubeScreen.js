import React, { Component } from 'react'
import { WebView, View } from 'react-native'
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class YoutubeScreen extends Component {

    render() {

        return (
            <View style={{ flex: 1 }}>
                <Header
                    barStyle="light-content"
                    leftComponent={<Icon style={{ marginLeft: 10 }}
                        name='chevron-left'
                        size={25}
                        color='#fff'
                        onPress={() => this.props.navigation.goBack()} />}
                    centerComponent={{ text: 'Retour', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                    containerStyle={{ backgroundColor: '#13172F', justifyContent: 'space-around', borderBottomColor: '#13172F' }}
                />
                <WebView
                    style={{ flex: 1 }}
                    javaScriptEnabled={true}
                    source={{ uri: 'https://www.youtube.com/embed/EsaX5kltRcA?rel=0&autoplay=0&showinfo=0&controls=0' }}
                />
            </View>
        )
    }
}

