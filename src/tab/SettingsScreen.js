import React, {Component} from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';


/*export class SettingsScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title="Setting" isHome={true} navigation={this.props.navigation}/>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <RVText content="Setting!"/>
                <TouchableOpacity
                style={{marginTop: 20}}
                onPress={() => this.props.navigation.navigate('SettingDetail')}
                >
                <RVText content="Go Setting Detail"/>
                </TouchableOpacity>
            </View>
            </SafeAreaView>
        );
    }
}*/
import { Container, Header, Content, Left, Body, Right, Title, Tab, Tabs } from 'native-base';
import Tab1 from '../Tabs/tabOneUs';
import Tab2 from '../Tabs/tabTwoUs';
import Tab3 from '../Tabs/tabThreeUs';

export class SettingsScreen extends Component {
    render() {
        return (
            <Container>
                 
                <Header style={{ backgroundColor: '#24ccff' }} hasTabs >
                    <Left />
                    <Body>
                        <Title style={{ color: 'white' }}>Daily News</Title>
                    </Body>
                    <Right />
                </Header>
                <Tabs>
                    <Tab tabStyle={{ backgroundColor: '#24ccff' }}
                        activeTabStyle={{ backgroundColor: '#00bafe' }}
                        heading="General">
                        <Tab1 />
                    </Tab>
                    <Tab tabStyle={{ backgroundColor: '#24ccff' }}
                        activeTabStyle={{ backgroundColor: '#00bafe' }}
                        heading="Business">
                        <Tab2 />
                    </Tab>
                    <Tab tabStyle={{ backgroundColor: '#24ccff' }}
                        activeTabStyle={{ backgroundColor: '#00bafe' }}
                        heading="Technology">
                        <Tab3 />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}