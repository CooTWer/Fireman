import Icon from 'react-native-vector-icons/Ionicons';
import React, {Component} from 'react';
import {TouchableOpacity, View, Text, Image, TextInput, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default class Tabs extends React.Component{

    static propTypes = {
        goToPage: PropTypes.func, // 跳转到对应tab的方法
        activeTab: PropTypes.number, // 当前被选中的tab下标
        tabs: PropTypes.array, // 所有tabs集合
        tabsInfo: PropTypes.array, // 保存Tab详情
    };

    constructor(props) {
        super(props);
    }

    renderTabOption(tab, i) {
        const color = this.props.activeTab === i ? "#6B8E23" : "#ADADAD"; // 判断i是否是当前选中的tab，设置不同的颜色
        return (
            <TouchableOpacity key={i} onPress={()=>this.props.goToPage(i)} style={styles.tab}>
                <View style={styles.tabItem}>
                    <Icon
                        name={this.props.tabsInfo[i].tabIconName}  // 图标
                        size={30}
                        color={color}/>
                    <Text style={{color: color}}>
                        {this.props.tabsInfo[i].tabNames}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.tabs}>
                {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabs: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        borderTopColor: '#6B8E23',
        borderTopWidth: 4,
        marginBottom: 10
    },
    tabItem: {

    },
});
