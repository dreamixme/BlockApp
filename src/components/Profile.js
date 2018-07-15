import React, { Component } from 'react';
import {View, StyleSheet, Text, Image, TextInput, AsyncStorage, Alert} from 'react-native';
import { Button } from 'native-base';
import Toast from 'react-native-custom-toast';


class Profile extends Component {

    constructor(props) {
        super(props);
        navigate = props.navigation,
            this.state = {
                TextInputName: '',
                TextInputFamily: '',
                NumberPhone:'333'
            }
    }

    SaveUser = (DataUser) =>{
        const { TextInputName }  = this.state ;
        const { TextInputFamily }  = this.state ;
        let userName = TextInputName;
        let userFamily = TextInputFamily;
        AsyncStorage.setItem('userName',userName);
        AsyncStorage.setItem('userFamily',userFamily);
    }
    componentDidMount() {
        this.showData();
    }
    showData = async() =>{
        this.setState({
            NumberPhone: await AsyncStorage.getItem('NumberPhone')
        })
    }

    showCustomToast() {
        this.refs.customToast.showToast('لطفا نام و نام خانوادگی را وارد نمائید', 2500);
    }
    CheckTextInputIsEmptyOrNot = () => {
        const {TextInputName} = this.state;
        const {TextInputFamily} = this.state;
        if (TextInputName == '' || TextInputFamily=='') {
            this.showCustomToast();
        }
        else {
            // AsyncStorage.removeItem('user');
            this.SaveUser("user");
            this.props.navigation.navigate('Home')
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.content}>
                    <Text style={{ fontFamily: "iran", fontSize: 28, color: '#000' }}>مشخصات خود را وارد کنید</Text>

                    <TextInput underlineColorAndroid='transparent' keyboardType="default"
                        style={styles.TextInputStyle}
                        onChangeText={(TextInputName) => this.setState({ TextInputName })}
                        value={this.state.username}
                        maxLength={14}
                        placeholder='نام' />

                    <TextInput underlineColorAndroid='transparent' keyboardType="default"
                        style={styles.TextInputStyle}
                        value={this.state.username}
                        onChangeText={(TextInputFamily) => this.setState({ TextInputFamily })}
                        maxLength={14}
                        placeholder='نام خانوادگی' />

                    <TextInput underlineColorAndroid='transparent' keyboardType="numeric"
                        style={styles.TextInputStyle}
                        value={this.state.NumberPhone}
                        maxLength={11}
                        editable={false} />

                </View>

             

                <Button full primary
                        onPress={() => this.CheckTextInputIsEmptyOrNot()}
                        title="Home"
                        color="#841584"
                        accessibilityLabel="Home"
                        style={{ margin: 10 ,backgroundColor:'blue',
                        borderRadius:10,
                        borderWidth: 1,
                        borderColor: '#000',}}
                    >
                    <Text style={{ fontFamily: "iran", fontSize: 18, color: '#fff' }}> ثبت نام</Text>
                    </Button>
                   <Toast ref = "customToast" backgroundColor = "#28a745" />


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
    TextInputStyle: {
        fontFamily: "iran", fontSize: 18  ,backgroundColor:'#cfe0e8',borderRadius:10 ,marginLeft:20,marginRight:20,width:300,textAlign: 'center',margin:2 },
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

export { Profile };