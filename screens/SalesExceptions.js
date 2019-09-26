import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Header, Left, Right, Icon } from 'native-base';
import Colors from '../constants/colors';

class SalesExceptions extends Component {
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
                        <Text>Sales Exceptions</Text>
                    </Right>
                </Header>
                <View style={styles.bodyContainer}>
                    <Text>Sales Exceptions</Text>
                </View>
            </View>
        );
    }
}

export default SalesExceptions;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bodyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        backgroundColor: Colors.bgHeader
    }
})