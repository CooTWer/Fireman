import Icon from 'react-native-vector-icons/Ionicons';
import React, {Component} from 'react';
import {TouchableOpacity, View, Text, Image, TextInput, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';


class BasicInfo extends React.Component {
    static propTypes = {
        basicInfo: PropTypes.object,
    };

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <View>
                <Text>单位名称：{this.props.basicInfo.name} </Text>
                <Text>单位地址：{this.props.basicInfo.address} </Text>
                <Text>联系电话：{this.props.basicInfo.telephone} </Text>
                <Text>人员总数：{this.props.basicInfo.population} </Text>
                <Text>建筑高度：{this.props.basicInfo.buildingHeight}米 </Text>
                <Text>层数：{this.props.basicInfo.plies} </Text>
            </View>
        )
    };
}

export default BasicInfo;