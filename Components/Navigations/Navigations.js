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
const navigator = createDrawerNavigator(
    {
        Home : HomeScreen,
        Film: FilmScreen
    },
    {
        // drawerType: 'back',
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
    Mood: MoodScreen,
    With: WithScreen,
    Film: FilmScreen,
    navigator : navigator
}, { headerMode: 'none' })

export default Navigation = createAppContainer(StackNavigator);
