import React, {Component} from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import {CustomHeader} from '../index'


export class SettingsScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title="Setting" isHome={true} navigation={this.props.navigation}/>
          
            </SafeAreaView>
        );
    }
}
