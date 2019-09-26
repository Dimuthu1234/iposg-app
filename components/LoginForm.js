/* @flow */

import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { Icon, Input, Left, Right, Body } from 'native-base';
import Colors from '../constants/colors';
export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputview}>
                    <Input
                        style={{ marginLeft: 30, position: 'absolute' }}
                        placeholder="Username"
                    />
                    <Icon
                        style={{ color: '#ADD8E6', marginTop: 14, fontSize: 20, marginLeft: 10, position: 'absolute' }}
                        name='person'
                    />
                </View>

                <View style={styles.inputview}>
                    <Input
                        style={{ marginLeft: 30, position: 'absolute' }}
                        autoCorrect={false}
                        secureTextEntry
                        placeholder="Password"
                    />
                    <Icon
                        style={{ color: '#ADD8E6', marginTop: 14, fontSize: 20, marginLeft: 10, position: 'absolute' }}
                        name='keypad'
                    />
                    <Icon
                        style={{ color: '#ADD8E6', marginTop: 14, fontSize: 20, marginLeft: 300, position: 'absolute' }}
                        name='eye'
                    />
                </View>
                <TouchableOpacity style={styles.buttoncontainer}>
                    <Text style={styles.buttontext}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    buttoncontainer: {
        shadowOpacity: 6,
        shadowColor: Colors.shadow,
        borderRadius: 10,
        backgroundColor: Colors.primary,
        paddingVertical: 20
    },
    buttontext: {
        textAlign: 'center',
        color: Colors.white,
        fontWeight: 'bold',
    },
    inputview: {
        flexDirection: 'column',
        textAlign: 'center',
        shadowOpacity: 6,
        shadowColor: Colors.shadow,
        elevation: 1,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.accent,
        height: 50,
        backgroundColor: Colors.white,

        marginBottom: 15,
    },
    input: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});
