import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class CompanyDetail extends React.Component{
    render(){
        return(
            <View>
                <Text style={{width: 50, height:50, background:'powderblue'}}>第一排</Text>
                <Text style={{width: 50, height: 50, backgroundColor: 'skyblue'}} >第二排</Text>
                <Text style={{width: 50, height: 50, backgroundColor: 'steelblue'}} >第三排</Text>
            </View>
        );
    }
}
