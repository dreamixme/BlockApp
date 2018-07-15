import React, {Component} from 'react';
import {StyleSheet,Text,View,Image,Alert,} from 'react-native';
import {
    Container, List, ListItem, Separator, Card,Icon,Button,
    Left, Body, Right, Content, Footer, FooterTab, CardItem
} from 'native-base';
import {Badge , Divider } from 'react-native-elements'

const extractKey = ({id}) => id

class Home extends Component {
    constructor(props) {
        super(props);
        navigate = props.navigation;
        this.state = {
            active: false
        }
    }

    Knowmore = () => {
        Alert.alert("Know more");
    }


    render() {
        // const {navigate} = this.props.navigation;
        return (
            <Container style={{backgroundColor: '#fff'}}>

                <Content style={{backgroundColor: '#fff'}}>
                    <Text style={{
                        fontFamily: "iran",
                        fontSize: 30,
                        color: '#000',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}>معاملات بلوکی</Text>
                    <Card>
                        <CardItem cardBody button onPress={() => alert("This is More")}
                                  style={{backgroundColor: '#fff'}}>
                            <Image source={require('../img/Baner.png')} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                    </Card>

                    <Separator bordered>
                        <Text style={{fontFamily: "iran", fontSize: 20, color: '#000', textAlign: 'right'}}> بلوک های
                            من</Text>
                    </Separator>
                    <List>
                        <ListItem icon>
                            <Left>
                                <ListItem icon>
                                    <Left>
                                        <Badge  value="9" />
                                    </Left>
                                </ListItem>
                            </Left>
                            <Body>
                            <ListItem icon>
                                <Body>
                                <Text style={{fontSize: 12, color: '#000'}}>2.3M</Text>
                                </Body>
                                <Right>
                                    <Text style={{fontSize: 12, color: '#000'}}>1,178</Text>
                                </Right>
                            </ListItem>
                            </Body>
                            <Right>
                                <ListItem icon>
                                    <Left>
                                        <Text style={{fontFamily: "iran", fontSize: 18, color: 'red'}}>فروش</Text>
                                    </Left>

                                    <Right>
                                        <Text style={{fontFamily: "iran", fontSize: 20, color: '#000'}}>خساپا</Text>
                                    </Right>
                                </ListItem>
                            </Right>
                        </ListItem>

                        <ListItem icon>
                            <Left>
                                <ListItem icon>
                                    <Left>
                                        <Badge primary vertical>
                                            <Text style={{color: '#fff'}}>3</Text>
                                        </Badge>
                                    </Left>
                                </ListItem>
                            </Left>
                            <Body>
                            <ListItem icon>
                                <Body>
                                <Text style={{fontSize: 12, color: '#000'}}>6.3M</Text>
                                </Body>
                                <Right>
                                    <Text style={{fontSize: 12, color: '#000'}}>79</Text>
                                </Right>
                            </ListItem>
                            </Body>
                            <Right>
                                <ListItem icon>
                                    <Left>
                                        <Text style={{fontFamily: "iran", fontSize: 18, color: 'red'}}>فروش</Text>
                                    </Left>

                                    <Right>
                                        <Text style={{fontFamily: "iran", fontSize: 20, color: '#000'}}>ذوب</Text>
                                    </Right>
                                </ListItem>
                            </Right>
                        </ListItem>
                    </List>


                </Content>

                <Footer>
                    <FooterTab style={{backgroundColor: '#fff'}} >
                        <Button transparent onPress={() => this.props.navigation.navigate('Settings')}>
                            <Icon name="settings" type={"MaterialIcons"} />
                            <Text style={{fontFamily: "iran", fontSize: 20, color: '#000'}}>تنظیمات</Text>
                        </Button>
                        <Button active  style={{ width: 30, height: 50, borderRadius: 100/2, backgroundColor: 'blue'}}
                                onPress={() => this.props.navigation.navigate('DetailList')}>
                            <Icon active name="plus" type='Entypo' />
                        </Button>
                        <Button transparent>
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

    row: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'skyblue',
    },
    header: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'steelblue',
        color: 'white',
        fontWeight: 'bold',
    },
    Containerview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    footerTab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    footerTab2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    ActivityIndicator: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    container: {
        flex: 1,
        marginTop: 60,
        marginBottom: 60
    },
    title: {
        fontSize: 38,
        backgroundColor: 'transparent'
    },
    button: {
        marginRight: 10
    },
    card: {
        width: 300
    }
})

export {Home};

