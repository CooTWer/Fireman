import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, StyleSheet} from 'react-native';


class BasicInfo extends React.Component {
    static propTypes = {
        basicInfo: PropTypes.object,
    };

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>基本信息： </Text>
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

const styles = StyleSheet.create({
    container: {
        padding: 8,
        margin: 5,
        borderColor: '#ffffff',
        borderRadius: 10,
        backgroundColor:'#ffffff',
    },
});

export default BasicInfo;