import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Header, Left, Right, Icon } from 'native-base';
import Colors from '../constants/colors';
class About extends Component {
    static navigationOptions = {
        drawerIcon : ({tintColor}) => (
            <Icon name="add" style={{fontSize: 24, color: tintColor}} />
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
                    <Text>About</Text>
                    </Right>
                </Header>
                <View style={styles.bodyContainer}>
                    <Text>About Screen</Text>
                </View>
            </View>
        );
    }
}

export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bodyContainer:{ 
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        backgroundColor: Colors.bgHeader,
    },
})