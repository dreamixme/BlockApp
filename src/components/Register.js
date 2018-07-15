import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, TextInput, AsyncStorage} from 'react-native';
import {Button} from 'native-base';
import Toast from 'react-native-custom-toast';

class Register extends Component {

    constructor(props) {
        super(props)
        navigate = props.navigation,
            this.state = {
                TextInputNumberPhone: ''
            }
    }

    SaveUser = (DataUser) =>{
        const { TextInputNumberPhone }  = this.state ;
        let NumberPhone = TextInputNumberPhone;
        AsyncStorage.setItem('NumberPhone',NumberPhone);
    }
    showCustomToast() {
        this.refs.customToast.showToast('لطفا شماره همراهتان را وارد نمائید', 2500);
    }

    CheckTextInputIsEmptyOrNot = () => {
        const {TextInputNumberPhone} = this.state;
        if (TextInputNumberPhone == '') {
           this.showCustomToast();
        }
        else {
            this.SaveUser("user");
            this.props.navigation.navigate('Authentication')
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.content}>
                    <Image source={require('../img/phone.png')}/>
                    <Text style={{fontFamily: "iran", fontSize: 25, color: '#000'}}>شماره خودتان را وارد نمائید</Text>
                </View>

                <TextInput
                    placeholder="09*********" keyboardType="numeric"
                    onChangeText={TextInputNumberPhone => this.setState({TextInputNumberPhone})}
                    underlineColorAndroid='transparent'
                    maxLength={11}
                    style={styles.TextInputStyle}
                />

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
                        }}>
                    <Text style={{fontFamily: "iran", fontSize: 18, color: '#fff'}}> ادامه</Text>
                </Button>
                <Toast ref = "customToast" backgroundColor = "#28a745" />


            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextInputStyle: {
        fontFamily: "iran",
        fontSize: 18,
        backgroundColor: '#cfe0e8',
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        width: 300,
        textAlign: 'center'
    },
    content: {
        alignItems: 'center',
    }
});

export {Register};