import React, { Component } from 'react';
import {
    Alert,
    View,
    StyleSheet,
} from 'react-native';
import { Header, Left, Right, Icon, ListItem, Content, Text, List, Thumbnail, Body, Button} from 'native-base';
import Colors from '../constants/colors';
import { Asset } from 'expo-asset';
class Promotions extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="add" style={{ fontSize: 24, color: tintColor }} />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
                    </Left>
                    <Right>
                        <Text>Promotions</Text>
                    </Right>
                </Header>
                <View style={styles.bodyContainer}>
                    <Content>
                        <List>
                            <ListItem thumbnail>
                                <Left>
                                    {/* <Thumbnail square source={{ uri: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2649880.jpg' }} /> */}
                                </Left>
                                <Body>
                                    <Text>promotion 1</Text>
                                    <Text note numberOfLines={1}>some description about promotion</Text>
                                </Body>
                            </ListItem>
                            <ListItem thumbnail>
                                <Left>
                                    {/* <Thumbnail square source={{ uri: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2649880.jpg' }} /> */}
                                </Left>
                                <Body>
                                    <Text>promotion 2</Text>
                                    <Text note numberOfLines={1}>some description about promotion</Text>
                                </Body>
                            </ListItem>
                            <ListItem thumbnail>
                                <Left>
                                    {/* <Thumbnail square source={{ uri: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2649880.jpg' }} /> */}
                                </Left>
                                <Body>
                                    <Text>promotion 3</Text>
                                    <Text note numberOfLines={1}>some description about promotion</Text>
                                </Body>
                            </ListItem>
                        </List>
                    </Content>
                </View>
            </View >
        );
    }
}

export default Promotions;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bodyContainer: {
        flex: 1,
    },
    header: {
        backgroundColor: Colors.bgHeader
    }
})