/* @flow */

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    KeyboardAvoidingView,
    StyleSheet,
} from 'react-native';
import  LoginForm from '../components/LoginForm'
import {Icon} from "native-base";
import Colors from '../constants/colors';

export default class Login extends Component {
    static navigationOptions = {
        drawerIcon : ({tintColor}) => (
            <Icon name="add" style={{fontSize: 24, color: tintColor}} />
        )
    }
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logocontainer}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/images/logo.png')}
                    />
                    <Text style={styles.title}>IPOSG App</Text>
                </View>
                <View style={styles.myform}>
                    <LoginForm/>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: Dimensions.get('window').width,
    },
    logocontainer:{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
        width: 200,
        height: 100,
    },
    myform:{
        flex:1
    },
    title:{
        color: Colors.primary,
        marginTop: 15,
        fontSize: 20,
    }
});
