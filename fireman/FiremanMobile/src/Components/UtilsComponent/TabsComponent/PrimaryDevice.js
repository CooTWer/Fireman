import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Card, ListItem, Button, Divider } from 'react-native-elements';
import PropTypes from 'prop-types';


export default  class PrimaryDevice extends Component{
    static propTypes = {
        devicesInfo: PropTypes.object,
    };

    constructor(props){
        super(props);
    };

    render(){
        return(
            <View style={styles.container}>
                <Card title='消防控制室'>
                    <Text>位置: {this.props.devicesInfo.fireControlRoomLocation}</Text>
                </Card>
                <Card title='消防水源'>
                    <View style={styles.poolView}>
                        <Text style={styles.poolText}>消防水池数量: {this.props.devicesInfo.water.firePool.number}</Text>
                        <Text style={styles.poolText}>位置:  {this.props.devicesInfo.water.firePool.location}</Text>
                        <Text style={styles.poolText}>总容量:  {this.props.devicesInfo.water.firePool.capacity}</Text>
                        <Text style={styles.poolText}>补给方式:  {this.props.devicesInfo.water.firePool.supplyWay}</Text>
                    </View>
                    <Divider style={styles.divider} />
                    <View style={styles.poolView}>
                        <Text style={styles.poolText}>室外其他水源: {this.props.devicesInfo.water.outdoorSource.description}</Text>
                        <Text style={styles.poolText}>位置:  {this.props.devicesInfo.water.outdoorSource.location}</Text>
                    </View>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    poolView: {
        marginTop: 5,
        marginBottom: 5
    },
    poolText: {
        lineHeight: 20
    },
    divider: {
        backgroundColor: 'blue',
        height: 5
    }
});
