import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Alert ,FlatList} from 'react-native';
import {
    Container, Header, Button, Icon, List, Separator, Spinner, Toast,
    Left, Body, Title, Right, Content, Footer, FooterTab, Drawer, Card, CardItem, ScrollableTab
} from 'native-base';
import { ListItem,PricingCard ,SocialIcon } from 'react-native-elements'


class DetailList extends Component {

    state = {
        isOnDefaultToggleSwitch: true,
        isOnLargeToggleSwitch: false,
        isOnBlueToggleSwitch: false,
    }


    keyExtractor = (item, index) => index

    renderItem = ({ item }) => (
        <ListItem
            title={item.name}
            subtitle={item.subtitle}
            leftAvatar={{
                source: item.avatar_url && { uri: item.avatar_url },
                title: item.name[0]
            }}
        />
    )

    constructor(props) {
        super(props);
        navigate = props.navigation;
        this.state = {
            active: false
        }
        const list = [
            {
                name: 'Amy Farha',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
        ]
    }

    FinishApp = () => {
        Alert.alert(
            'Exit',
            'Do you want to exit Application',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },

            ],
            { cancelable: false }
        )
    }

    render() {
        return (
            <Container style={{ backgroundColor: '#fff' }}>

                <Header style={{
                    backgroundColor: '#00bfff',
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


                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                   
                    </Body>
                    <Right>
                        <Left>
                            <View style={styles.ActivityIndicator}>
                                <Text style={{  color: 'blue' }}> 20M    </Text>
                                <Text style={{  color: '#fff' }}>    1,189</Text>
                            </View>

                        </Left>
                        <Body>
                            

                        </Body>
                        <Right>
                            <View style={styles.ActivityIndicator}>
                                <Text style={{ fontFamily: "iran", color: 'blue' }}>     فروش</Text>
                                <Text style={{ fontFamily: "iran", color: '#fff' }}> خساپا</Text>
                            </View>
                        </Right>


                    </Right>

                </Header>


                <Content>

                    <Separator bordered >
                        <Text style={{ fontFamily: "iran", fontSize: 20, color: '#000', textAlign: 'right' }}>پیشنهادهای دریافتی</Text>
                    </Separator>
                    <List >
                        <ListItem icon  >
                            <Left>
                                <ListItem icon>
                                    <Left>
                                        <Icon name="chat" type='MaterialIcons' />
                                    </Left>
                                    <Right>
                                        <Icon name="call" type='MaterialIcons' />
                                    </Right>
                                </ListItem>
                            </Left>
                            <Body>
                                <ListItem icon>
                                    <Body>
                                        <Text style={{ fontSize: 12, color: '#000' }}>2.3M</Text>
                                    </Body>
                                    <Right>
                                        <Text style={{ fontSize: 12, color: '#000' }}>1,178</Text>
                                    </Right>
                                </ListItem>
                            </Body>
                            <Right>
                                <ListItem icon >
                                    <Left>
                                        <Text style={{ fontFamily: "iran", fontSize: 18, color: 'blue' }}
                                        >خرید</Text>
                                    </Left>

                                    <Right>
                                        <Text style={{ fontFamily: "iran", fontSize: 20, color: '#000' }}>خساپا</Text>
                                    </Right>
                                </ListItem>
                            </Right>
                        </ListItem>


                        <ListItem icon>
                            <Left>
                                <ListItem icon>
                                    <Left>
                                        <Icon name="chat" type='MaterialIcons' />
                                    </Left>
                                    <Right>
                                        <Icon name="call" type='MaterialIcons' />
                                    </Right>
                                </ListItem>
                            </Left>
                            <Body>
                                <ListItem icon>
                                    <Body>
                                        <Text style={{ fontSize: 12, color: '#000' }}>2.3M</Text>
                                    </Body>
                                    <Right>
                                        <Text style={{ fontSize: 12, color: '#000' }}>1,178</Text>
                                    </Right>
                                </ListItem>
                            </Body>
                            <Right>
                                <ListItem icon>
                                    <Left>
                                        <Text style={{ fontFamily: "iran", fontSize: 18, color: 'blue' }}>خرید</Text>
                                    </Left>

                                    <Right>
                                        <Text style={{ fontFamily: "iran", fontSize: 20, color: '#000' }}>خساپا</Text>
                                    </Right>
                                </ListItem>
                            </Right>
                        </ListItem>

                        <ListItem icon>
                            <Left>
                                <ListItem icon>
                                    <Left>
                                        <Icon name="chat" type='MaterialIcons' />
                                    </Left>
                                    <Right>
                                        <Icon name="call" type='MaterialIcons' />
                                    </Right>
                                </ListItem>
                            </Left>
                            <Body>
                                <ListItem icon>
                                    <Body>
                                        <Text style={{ fontSize: 12, color: '#000' }}>2.3M</Text>
                                    </Body>
                                    <Right>
                                        <Text style={{ fontSize: 12, color: '#000' }}>1,178</Text>
                                    </Right>
                                </ListItem>
                            </Body>
                            <Right>
                                <ListItem icon>
                                    <Left>
                                        <Text style={{ fontFamily: "iran", fontSize: 18, color: 'blue' }}>خرید</Text>
                                    </Left>

                                    <Right>
                                        <Text style={{ fontFamily: "iran", fontSize: 20, color: '#000' }}>خساپا</Text>

                                    </Right>
                                </ListItem>
                            </Right>
                        </ListItem>

                    </List>

                    <Text style={{ fontFamily: "iran", fontSize: 20, color: '#000' }}>خساپا</Text>


                    <PricingCard
                        color='#4f9deb'
                        title='Free'
                        price='$0'
                        info={['1 User', 'Basic Support', 'All Core Features']}
                        button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
                    />

                    <SocialIcon
                        title='Some Twitter Message'
                        button
                        type='twitter'
                    />

                </Content>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5
    },
    ratingImage: {
        height: 19.21,
        width: 100
    },
    ratingText: {
        paddingLeft: 10,
        color: 'grey'
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

export { DetailList };