import React, { Component } from 'react';
import {View, StyleSheet, Image,StatusBar} from 'react-native';
import {Container, Text, Footer,} from 'native-base';
import * as Progress from 'react-native-progress';


class SplashScreen extends Component {
    
    componentDidMount() {   
        setTimeout(() => {
          this.props.navigation.navigate('AppIntroSlider')
        }, 3000)
      }

        render() {
            const { navigate } = this.props.navigation;
            return (
                <Container style={{ backgroundColor: '#fff' }}>
                    <StatusBar
                        backgroundColor="blue"
                        barStyle="light-content"
                        hidden={true}
                    />
                    <View style={style.SideBarStyle}>
                        <Image source={require('../img/blockdeals.png')}
                        />

                        <Progress.Bar indeterminate={true} width={200} />

                    </View>

                    <Footer style={{ backgroundColor: '#fff' }} >
                        <Text style={{ fontFamily: "iran", fontSize: 18, top: 5 }}
                            onPress={() => this.props.navigation.navigate('AppIntroSlider')}
                        >شرکت تحلیلگر امید</Text>
                    </Footer>
                </Container >
            );
        }
    }

    const style = StyleSheet.create({
        SideBarStyle: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        input: {
            fontSize: 16,
            height: 40,
            padding: 10,
            marginBottom: 10,
            backgroundColor: 'rgba(255,255,255,1)',
        }

    });

export { SplashScreen };
