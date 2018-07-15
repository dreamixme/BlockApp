import React, {Component} from 'react';
import {Register} from './src/components/Register';
import {Authentication} from './src/components/Authentication';
import {Profile} from './src/components/Profile';
import {SplashScreen} from './src/components/SplashScreen';
import {StackNavigator} from 'react-navigation';
import {AppIntroSlider} from './src/components/AppIntroSlider';
import {Home} from './src/components/Home';
import {Settings} from './src/components/Settings';
import {DetailList} from './src/components/DetailList';
import {Opacity} from "./src/components/Opacity";


export const AppNavigator = StackNavigator({
    SplashScreen: {
        screen: SplashScreen,
    },
    AppIntroSlider: {
        screen: AppIntroSlider,
        navigationOptions: {
            gesturesEnabled: false,
        },
    },
    Register: {screen: Register},
    Authentication: {screen: Authentication},
    Profile: {screen: Profile},
    Home: {screen: Home},
    Settings: {screen: Settings},
    DetailList: {screen: DetailList},
    Opacity :{screen:Opacity}
}, {
    headerMode: 'none',
    gesturesEnabled: false,
});

export default class App extends Component {

    render() {
        return (
            <AppNavigator/>
        );
    }
}
