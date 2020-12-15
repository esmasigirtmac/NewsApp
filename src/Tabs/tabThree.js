import React, { Component } from 'react';
import { Alert, View, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

import { getNews } from '../service/news';

import DataItem from '../components/dataItem'
import ModelView from '../components/modelView';

export default class TabThree extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: null,
            setModalVisible:false,
            modalArticleData:{}
        }
    };


    handleItemPress = (articleData) =>{
        this.setState({
            setModalVisible:true,
            modalArticleData:articleData
        })
    }

    handleModalClose = () =>{
        this.setState({
            setModalVisible:false,
            modalArticleData:{}
        })
    }

    componentDidMount() {
        getNews('technology').then(data => {
            this.setState({
                isLoading: false,
                data: data
            });
        }, error => {
            Alert.alert('Error', 'Something went wrong!');
        });
    }

    render() {
        const renderItem = ({ item }) => (
            <DataItem onPress={this.handleItemPress} data={item} />
        );

        let view = this.state.isLoading ? (
            <View>
                <ActivityIndicator animating={this.state.isLoading} />
                <Text style={{ marginTop: 10 }}>Loading data</Text>
            </View>
        ) : (
                <SafeAreaView >
                    <FlatList
                        data={this.state.data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            )

        return (
            <Container>
                <Content>
                    {view}
                </Content>
                <ModelView 
                    showModal={this.state.setModalVisible}
                    articleData={this.state.modalArticleData}
                    onClose={this.handleModalClose}
                />
            </Container>
        );
    }
}