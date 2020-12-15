import React ,{Component} from 'react';
import {View,Text} from 'native-base';
import moment from 'moment';

export default class TimeFormat extends Component{
    constructor(props){
        super(props);
        this.date = props.time;
    }
    render(){
        const time = moment(this.date || moment.now()).fromNow();
        return(
            <Text note style={{marginHorizontal:10}}>{time}</Text>
        );
    }
}