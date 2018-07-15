import React, { Component } from 'react';
import {View, StyleSheet, Text, Image, TextInput, AsyncStorage, Alert} from 'react-native';
import { Button } from 'native-base';
import Toast from 'react-native-custom-toast';
import {Register} from "./Register";


class Authentication extends Component {

    constructor(props) {
        super(props);
        navigate = props.navigation,
            this.state = {
                TextInputAuth: '',
                NumberPhone:'NumberPhone'
            };

    }
    componentDidMount() {
       this.showData();
    }
    showData = async() =>{
        this.state.NumberPhone = await AsyncStorage.getItem('NumberPhone');
        this.setState({
            NumberPhone: await AsyncStorage.getItem('NumberPhone')
        })
    }
    CheckTextInputIsEmptyOrNot = () => {
        const {TextInputAuth} = this.state;
        if (TextInputAuth == '') {
            this.showCustomToast();
        }
        else {
            this.props.navigation.navigate('Profile')
        }
    }
    showCustomToast() {
        this.refs.customToast.showToast('لطفا کد ارسالی را وارد نمائید', 2500);
    }
    SendAgain() {
        this.refs.customToast.showToast('ارسال مجدد کد با موفقیت انجام گردید', 2500);
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.content}>
                    <Image source={require('../img/phone.png')} />
                    <Text style={{ fontFamily: "iran", fontSize: 25, color: '#000' }}>کد فعالسازی</Text>
                    <Text style={{ fontFamily: "iran", fontSize: 20, color: '#808080' }}>کد به شماره{this.state.NumberPhone}پیامک شد</Text>

                    <TextInput underlineColorAndroid='transparent' keyboardType="numeric"
                        style={styles.TextInputStyles}
                        onChangeText={(TextInputAuth) => this.setState({ TextInputAuth })}
                        value={this.state.username}
                        maxLength={4}
                        placeholder='****' />

                </View>

                <Button full primary
                    onPress={() => this.CheckTextInputIsEmptyOrNot()}
                    title="Authentication"
                    color="#841584"
                    accessibilityLabel="Authentication"
                    style={{
                        margin: 10, backgroundColor: 'blue',
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: '#000',
                    }}
                >
                    <Text style={{ fontFamily: "iran", fontSize: 18, color: '#fff' }}
                        onPress={() => this.props.navigation.navigate('Profile')}> ادامه</Text>
                </Button>
                <Toast ref = "customToast" backgroundColor = "#28a745" style={{ fontFamily: "iran" }} />


                <Text style={{ fontFamily: "iran", fontSize: 18, color: '#000', textAlign: 'right' }}>00:38</Text>
                <View style={styles.ActivityIndicator}>
                    <Text style={{ fontFamily: "iran", fontSize: 20, color: 'blue' }} onPress={() => this.props.navigation.navigate('Register')}>           ویرایش شماره </Text>
                    <Text style={{ fontFamily: "iran", fontSize: 20, color: 'blue' }}  onPress={() => this.SendAgain()}> ارسال مجدد کد</Text>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    SideBarStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextInputStyles : {
        fontFamily: "iran", fontSize: 18  ,backgroundColor:'#cfe0e8',borderRadius:10 ,marginLeft:20,marginRight:20,width:100,textAlign: 'center'
    },
    ActivityIndicator: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        justifyContent: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    content: {
        alignItems: 'center',
    },
    logo: {
        color: 'white',
        fontSize: 40,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 15,
        marginBottom: 20,
    },
    input: {
        fontSize: 16,
        height: 40,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255,1)',
    },
});

export { Authentication };