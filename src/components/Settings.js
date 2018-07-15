import React, { Component } from 'react';
import {StyleSheet, Text, View, BackHandler, Alert, ScrollView, AsyncStorage} from 'react-native';
import {
    Container, Header, Button, Icon, Card,Thumbnail,Badge,
    Left, Body, Title, Right, Content, Footer, FooterTab, Drawer, CardItem, ScrollableTab
} from 'native-base';
import ToggleSwitch from 'toggle-switch-react-native'

class Settings extends Component {


    state = {
        isOnDefaultToggleSwitch: true,
        isOnLargeToggleSwitch: false,
        isOnBlueToggleSwitch: false,
    }
    constructor(props) {
        super(props);
        navigate = props.navigation;
        this.state = {
            active: false,
            NameUser :'',
            FamilyUser :'',
            NumberPhone:''
        }
    }

    componentDidMount() {
        this.showData();
    }
    showData = async() =>{
        this.state.NumberPhone = await AsyncStorage.getItem('NumberPhone');
        this.setState({
            NumberPhone: await AsyncStorage.getItem('NumberPhone')
        });
        this.setState({
            NameUser: await AsyncStorage.getItem('userName')
        });
        this.setState({
            FamilyUser: await AsyncStorage.getItem('userFamily')
        })
    }

    FinishApp = () => {
        Alert.alert(
            'Exit',
            'Do you want to exit Application',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => BackHandler.exitApp()},
            ],
            { cancelable: false }
          )
    }

 
    render() {
        return (
            <Container style={{ backgroundColor: '#fff' }}>

                <Header style={{
                    backgroundColor: '#F8F8F8',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: 15,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    marginBottom: 10,
                    elevation: 2,
                    position: 'relative'
                }} >
                    <Text style={{ fontFamily: "iran", fontSize: 30, color: '#000' }}>تنظیمات</Text>
                </Header>


                <ScrollView>


           <Card  style={{ marginLeft: 5, marginRight: 5 }}>
            <CardItem>
                    <Left>
                        
                    </Left>
                <Body>
                   <Text style={{ fontFamily: "iran", fontSize: 20, color: '#000'}}>{this.state.NumberPhone}</Text>
                   <Text style={{ fontFamily: "iran", fontSize: 18, color: 'gray' }}>{this.state.NameUser} {this.state.FamilyUser}</Text>
                </Body>
              <Right>
                  <Thumbnail source={require('../img/profile.png')}/>
              </Right>
            </CardItem>

            <CardItem button onPress={() => this.showData()}>
              <Right>
                 <Text style={{ fontFamily: "iran", fontSize: 18, color: 'blue', textAlign: 'right' }}> ویرایش </Text>
              </Right>
            </CardItem>
          </Card>

                    <Card style={{ marginLeft: 5, marginRight: 5 }} >

                        <CardItem >
                            <Body >
                                <ToggleSwitch
                                    isOn={this.state.isOnDefaultToggleSwitch}
                                    onToggle={isOnDefaultToggleSwitch => {
                                        this.setState({ isOnDefaultToggleSwitch });
                                    }}
                                />
                            </Body>
                            <Right>
                                <Text style={{ fontFamily: "iran", fontSize: 18, color: '#000' }}> نمایش نوتیفیکشن ها</Text>
                            </Right>
                        </CardItem>

                        <CardItem >
                            <Body >
                                <ToggleSwitch
                                    isOn={this.state.isOnLargeToggleSwitch}
                                    onToggle={isOnLargeToggleSwitch => {
                                        this.setState({ isOnLargeToggleSwitch });
                                    }}
                                />
                            </Body>
                            <Right>
                                <Text style={{ fontFamily: "iran", fontSize: 16, color: '#000' }}> صدا هنگام دریافت نوتیفیکشن</Text>
                            </Right>
                        </CardItem>

                        <CardItem >
                            <Body >
                                <ToggleSwitch
                                    isOn={this.state.isOnBlueToggleSwitch}
                                    onToggle={isOnBlueToggleSwitch => {
                                        this.setState({ isOnBlueToggleSwitch });
                                    }}
                                />
                            </Body>
                            <Right>
                                <Text style={{ fontFamily: "iran", fontSize: 16, color: '#000' }}> لرزش هنگام دریافت نوتیفیکشن</Text>
                            </Right>
                        </CardItem>

                    </Card>

                    <Card style={{ marginLeft: 5, marginRight: 5 }} >

                        <CardItem button onPress={() => alert("About...")}>
                            <Left>
                                <Icon name="chevron-left" type='EvilIcons' />
                            </Left>
                            <Right>
                                    <Text style={{ fontFamily: "iran", fontSize: 20, textAlign: 'right', color: '#000' }}>درباره  ما </Text>
                            </Right>
                        </CardItem>

                    </Card>

                    <Card style={{ marginLeft: 5, marginRight: 5 }}  >

                        <CardItem button onPress={() => this.FinishApp()}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontFamily: "iran", fontSize: 25, color: 'red' }}>خروج از برنامه</Text>
                            </View>
                        </CardItem>
                    </Card>

                </ScrollView>

                <Footer>
                    <FooterTab style={{backgroundColor: '#fff'}} >
                        <Button transparent >
                            <Icon name="settings" type={"MaterialIcons"} />
                            <Text style={{fontFamily: "iran", fontSize: 20, color: '#000'}}>تنظیمات</Text>
                        </Button>
                        <Button active  style={{ width: 30, height: 50, borderRadius: 100/2, backgroundColor: 'blue'}}
                                onPress={() => this.props.navigation.navigate('DetailList')}>
                            <Icon active name="plus" type='Entypo' />
                        </Button>
                        <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
                            <Icon name="home" type={"FontAwesome"} />
                            <Text style={{fontFamily: "iran", fontSize: 20, color: '#000'}}>خانه</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {

    },
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
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
    footerTab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        top: -5
    },
    ActivityIndicator: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
})

export { Settings };