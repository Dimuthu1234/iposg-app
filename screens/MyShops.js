import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Header, Left, Right, Icon, Content, List, ListItem } from 'native-base';
import Colors from '../constants/colors' ;

class MyShops extends Component {
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
                        <Text>My Shops</Text>
                    </Right>
                </Header>
                <View style={styles.bodyContainer}>
                    <Content>
                        <List>
                            <ListItem selected>
                                <Left>
                                    <Text>Simon Mignolet</Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Text>Nathaniel Clyne</Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Text>Dejan Lovren</Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                        </List>
                    </Content>
                </View>
            </View>
        );
    }
}

export default MyShops;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bodyContainer: {
        flex: 1,
    },
    header: {
        backgroundColor: Colors.bgHeader,
    },
})