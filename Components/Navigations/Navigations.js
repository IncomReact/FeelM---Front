import React from 'react';

import { Platform } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import LoginScreen from '../Screens/LoginScreen';
import MoodScreen from '../Screens/MoodScreen'
import WithScreen from '../Screens/WithScreen';
import HomeScreen from '../Screens/HomeScreen'
import DrawerScreen from '../Screens/DrawerScreen'
import FilmScreen from '../Screens/FilmScreen'
import SettingsScreen from '../Screens/SettingsScreen';
import ContactScreen from '../Screens/ContactScreen';
import FaceFeelMScreen from '../Screens/FaceFeelMScreen';
import WishlistScreen from '../Screens/WishlistScreen';
import TopFilmScreen from '../Screens/TopFilmScreen';
import BoxOfficeScreen from '../Screens/BoxOfficeScreen';
import SearchMovieScreen from '../Screens/SearchMovieScreen';
import TypeScreen from '../Screens/TypeScreen';
import LinkVodScreen from '../Screens/LinkVodScreen';
import LinkBuyScreen from '../Screens/LinkBuyScreen';
import LinkStreamScreen from '../Screens/LinkStreamScreen';
import VodWebviewScreen from '../Screens/LinkVodWebviewScreen';
import YoutubeScreen from '../Screens/YoutubeScreen';
import ChartScreen from '../Screens/ChartScreen';
import ScanPicture from '../Screens/PictureScan';
import HomeScanScreen from '../Screens/HomeScanScreen';
import MatchUserScreen from '../Screens/MatchUserScreen'
const navigator = createDrawerNavigator(
    {
        Home: HomeScreen,
        HomeScan: HomeScanScreen,
    },
    {
        drawerType: 'back',
        drawerPosition: 'left',
        drawerWidth: 350,
        drawerBackgroundColor: '#090c1c',
        contentComponent: DrawerScreen
    }
);
// const DrawerNavigator = createDrawerNavigator({
//     Login: {
//         Login : LoginScreen,
//     },
    
// });

// const MainNavigator = createBottomTabNavigator({
//     Library: LibraryScreen,

// }, {
//         defaultNavigationOptions: ({ navigation }) => ({
//             tabBarIcon: ({ focused, horizontal, tintColor }) => {
//                 var iconName;
//                 var outline = (focused)
//                     ? ''
//                     : '';
//                 if (navigation.state.routeName == 'Camera') {
//                     Platform.OS === 'ios'
//                         ? iconName = 'camera-retro'
//                         : iconName = 'camera-retro'
//                 } else if (navigation.state.routeName == 'Library') {
//                     Platform.OS === 'ios'
//                         ? iconName = 'image'
//                         : iconName = 'image'
//                 }

//                 return <Icon name={iconName} size={25} color={tintColor} />;
//             }
//         }),
//         tabBarOptions: {
//             activeTintColor: '#efbe4d',
//             inactiveTintColor: '#392416',
//             style: {
//                 backgroundColor: '#fff', borderTopColor: '#fff', shadowColor: 'rgba(6, 49,77, 0.3)',
//                 borderTopWidth: 5,
//                 shadowOpacity: 1,
//                 borderColor: "#fff",
//                 borderWidth: 4,
//                 elevation: 10,
//                 shadowRadius: 10,
//                 shadowOffset: {
//                     width: 1,
//                     height: 1
//                 }
//             }
//         }
//     });

var StackNavigator = createStackNavigator({
    
    Login: LoginScreen,
    Type: TypeScreen,
    Mood: MoodScreen,
    With: WithScreen,
    LinkBuy: LinkBuyScreen,
    LinkVod: LinkVodScreen,
    LinkStream: LinkStreamScreen,
    BoxOffice: BoxOfficeScreen,
    TopFilm: TopFilmScreen,
    Wishlist: WishlistScreen,
    FaceFeelM: FaceFeelMScreen,
    Contact: ContactScreen,
    Settings: SettingsScreen,
    Login: LoginScreen,
    Film: FilmScreen,
    Search: SearchMovieScreen,
    Webview: VodWebviewScreen,
    Youtube: YoutubeScreen,
    Chart: ChartScreen,
    Scan: ScanPicture,
    Match: MatchUserScreen,
    
    navigator : navigator
}, { headerMode: 'none' })

export default Navigation = createAppContainer(StackNavigator);
