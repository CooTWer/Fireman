import Icon from 'react-native-vector-icons/Ionicons';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

class KeyPositionInfo extends React.Component {
    static propTypes = {
        positionArray: PropTypes.array,
    };

    constructor(props) {
        super(props);
    };

    renderOnePosition(keyPosition, i) {
        return (
            <View key={i} style={styles.container}>
                <Text>重点部位名称：{keyPosition.name} </Text>
                <Text>重点部位位置：{keyPosition.location} </Text>
                <Text>建筑结构：{keyPosition.buildingStructure} </Text>
                <Text>使用性质：{keyPosition.usage} </Text>
                <Text>主要危险性：{keyPosition.risk} </Text>
            </View>
        )
    }

    render() {
        return (
            <View>
                {this.props.positionArray.map((keyPosition, i) => this.renderOnePosition(keyPosition, i))}
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        margin: 5,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#ffffff',
    },
});


export default KeyPositionInfo;