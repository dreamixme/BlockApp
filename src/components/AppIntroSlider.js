import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import {
    Container, Footer, FooterTab, Card, CardItem
} from 'native-base';
import Swiper from 'react-native-swiper';

class AppIntroSlider extends Component {

    state = {
        language: '',
    };

    render() {
        return (
            <Container>
                <Swiper style={styles.wrapper} showsButtons={true}>
                    <View style={styles.slide1}>
                        <Card  style={{ marginLeft: 25, marginRight: 25, marginTop: 10 ,marginBottom: 50}}>

                            <CardItem>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ width: 95 * 2.5, height: 73 * 2.5 }} source={require('../img/slider1.jpg')} />
                                    <Text style={{ fontFamily: "iran", fontSize: 33,color:'#000'}}>الگوریتم ها آینده معاملات</Text>
                                </View>
                            </CardItem>
                            <CardItem >
                                <Text style={{ fontFamily: "iran", fontSize: 18, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                    روند منطقی حرکت سهم و عدم دستکاری در قیمت، هزینه کمتر معاملاتی </Text>
                            </CardItem>

                            <CardItem >

                            </CardItem>
                        </Card>

                    </View>

                    <View style={styles.slide1}>
                        <Card  style={{ marginLeft: 25, marginRight: 25, marginTop: 10 ,marginBottom: 50}}>
                            <CardItem>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ width: 95 * 2.5, height: 73 * 2.5 }} source={require('../img/slider1.jpg')} />
                                    <Text style={{ fontFamily: "iran", fontSize: 33 ,color:'#000'}}>الگوریتم ها آینده معاملات </Text>
                                </View>
                            </CardItem>
                            <CardItem >
                                <Text style={{ fontFamily: "iran", fontSize: 18, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                    روند منطقی حرکت سهم و عدم دستکاری در قیمت، هزینه کمتر معاملاتی </Text>
                            </CardItem>

                            <CardItem >

                            </CardItem>
                        </Card>

                    </View>


                    <View style={styles.slide1}>
                        <Card border style={{ marginLeft: 25, marginRight: 25, marginTop: 10 ,marginBottom: 50}}>

                            <CardItem>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ width: 95 * 2.5, height: 73 * 2.5 }} source={require('../img/slider1.jpg')} />
                                    <Text style={{ fontFamily: "iran", fontSize: 33,color:'#000' }}>الگوریتم ها آینده معاملات</Text>
                                </View>
                            </CardItem>
                            <CardItem >
                                <Text style={{ fontFamily: "iran", fontSize: 18, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                    روند منطقی حرکت سهم و عدم دستکاری در قیمت، هزینه کمتر معاملاتی </Text>
                            </CardItem>

                            <CardItem >

                            </CardItem>
                        </Card>


                    </View>


                    <View style={styles.slide1}>
                        <Card border style={{ marginLeft: 25, marginRight: 25, marginTop: 10 ,marginBottom: 50 }}>

                            <CardItem>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ width: 95 * 2.5, height: 73 * 2.5 }} source={require('../img/slider1.jpg')} />
                                    <Text style={{ fontFamily: "iran", fontSize: 33 ,color:'#000'}}>الگوریتم ها آینده معاملات</Text>
                                </View>
                            </CardItem>
                            <CardItem >
                                <Text style={{ fontFamily: "iran", fontSize: 18, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                    روند منطقی حرکت سهم و عدم دستکاری در قیمت، هزینه کمتر معاملاتی </Text>
                            </CardItem>

                            <CardItem >

                            </CardItem>
                        </Card>


                    </View>

                </Swiper>


                <Footer  >
                    <FooterTab style = {{backgroundColor:'#fff'}} >

                        <TouchableOpacity
                            style={styles.SubmitButtonStyle}
                            activeOpacity={.5}
                            onPress={() => this.props.navigation.navigate('Register')}
                        >
                            <Text style={{
                                fontFamily: "iran", fontSize: 18, color: '#fff'
                                ,  justifyContent: 'center'
                            }}
                            >ثبت نام </Text>
                        </TouchableOpacity>
                        
                    </FooterTab>
                </Footer>


            </Container>


        );
    }
}

const styles = StyleSheet.create({
    wrapper: {

    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    slide4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
    },
    header: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pic: {
        width: 75 * 2,
        height: 63 * 2,
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    info: {
        flex: 0.5,
        alignItems: 'center',
        padding: 40
    },
    title: {
        color: '#fff',
        fontSize: 30,
        paddingBottom: 20,
    },
    description: {
        color: '#fff',
        fontSize: 20,
    },
    SubmitButtonStyle: {
        marginTop:5,
        paddingTop:15,
        marginBottom:5,
        paddingBottom:15,
        marginLeft:30,
        marginRight:30,
        backgroundColor:'blue',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
})

export { AppIntroSlider };