import React, { Component } from 'react';
import { ListItem, Left, Right, Thumbnail, Body, Text, Button, View } from 'native-base';
import TimeFormat from '../components/timeFormat'

export default class DataItem extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
    }

    handlePress =() =>{
        const {url,title} = this.data;
        this.props.onPress({url,title});
    }

    render() {
        return (
            <ListItem thumbnail>
                <Left>
                    <Thumbnail square source={{
                        uri: this.data.urlToImage != null
                            ? this.data.urlToImage : 'https://via.placeholder.com/150'
                    }} />
                </Left>
                <Body>
                    <Text numberOfLines={2}>{this.data.title}</Text>
                    <Text note numberOfLines={3}>{this.data.description}</Text>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                        <Text note>{this.data.source.name}</Text>
                        <TimeFormat time={this.data.publishedAt} />
                    </View>
                </Body>
                <Right>
                    <Button transparent onPress={this.handlePress}>
                        <Text>View</Text>
                    </Button>
                </Right>
            </ListItem>
        )
    }
}
