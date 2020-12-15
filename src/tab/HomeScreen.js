import React, {Component} from 'react';
import { Container, Header, Content, Left, Body, Right, Title, Tab, Tabs } from 'native-base';
import Tab1 from '../Tabs/tabOne';
import Tab2 from '../Tabs/tabTwo';
import Tab3 from '../Tabs/tabThree';
export class HomeScreen extends Component {
    render() {
        return (
            <Container>
                 
                <Header style={{ backgroundColor: '#2427FF' }} hasTabs >
                    <Left />
                    <Body>
                        <Title style={{ color: 'white' }}>Haber Akışı</Title>
                    </Body>
                    <Right />
                </Header>
                <Tabs>
                    <Tab tabStyle={{ backgroundColor: '#2427FF' }}
                        activeTabStyle={{ backgroundColor: '#0000FE' }}
                        heading="Genel">
                        <Tab1 />
                    </Tab>
                    <Tab tabStyle={{ backgroundColor: '#2427FF' }}
                        activeTabStyle={{ backgroundColor: '#0000FE' }}
                        heading="İş">
                        <Tab2 />
                    </Tab>
                    <Tab tabStyle={{ backgroundColor: '#2427FF' }}
                        activeTabStyle={{ backgroundColor: '#0000FE' }}
                        heading="Teknoloji">
                        <Tab3 />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}




/*import React, {Component} from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import {CustomHeader} from '../index'
//import {RVText} from '../core'

export class HomeScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title="Home" isHome={true} navigation={this.props.navigation}/>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    
                    
                </View>
            </SafeAreaView>
        );
    }
}*/

