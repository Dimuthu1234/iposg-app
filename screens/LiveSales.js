import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Header, Left, Right, Icon, Content, Accordion, Body } from 'native-base';
import Colors from '../constants/colors' ;

const dataArray = [
    { title: "First Element", content: [`Lorem ipsum dolor sit amet\n`, `Lorem ipsum dolor sit amet\n`, `Lorem ipsum dolor sit amet\n`] },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];
class LiveSales extends Component {
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
                        <Right><Text>Live Sales</Text></Right>
                </Header>
                <View style={styles.bodyContainer}>
                    <Content padder>
                        <Accordion
                            dataArray={dataArray}
                            icon="add"
                            expandedIcon="remove"
                            iconStyle={{ color: "#0000A0" }}
                            expandedIconStyle={{ color: "#0000A0" }}
                        />
                    </Content>
                </View>
            </View>
        );
    }
}

export default LiveSales;

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