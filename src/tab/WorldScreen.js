import React, {Component} from 'react'
import { Container, Header, Left, Body, Right, Title, Tab, Tabs } from 'native-base';
import Tab1 from '../Tabs/tabOneUs';
import Tab2 from '../Tabs/tabTwoUs';
import Tab3 from '../Tabs/tabThreeUs';

export class WorldScreen extends Component {
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