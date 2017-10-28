import React, {Component} from 'react';
import {ScrollView, View, Text, Image, TextInput, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements'
import CompanyList from './CompanyList';
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';

export default class CompanyDetail extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            companyList: CompanyList,
            companyDetail: companyDetail,
            text: null,
            tabNames: ['详情', '设施', 'Tab3', 'Tab4'],
            tabIconNames: ['ios-paper', 'ios-albums', 'ios-paper-plane', 'ios-person-add'],
        };
    }

    renderIconAndText(text, iconName) {
        return (
            <View>
                <Icon name={iconName}/>
                <Text>{text}</Text>
            </View>
        );
    }

    render() {
        return (
            <ScrollView style={styles.base}>
                <Image
                    source={{uri: "/Users/rhuan/Downloads/83I58PICBzd.jpg"}}
                    style={{width: 320, height: 220}}/>
                {/*<TextInput*/}
                {/*style={{height: 40, borderColor: 'gray', borderWidth: 1}}*/}
                {/*onChangeText={(text) => this.setState({text})}*/}
                {/*placeholder={"Where do you want to go?...."}*/}
                {/*value={this.state.text}/>*/}
                <View style={styles.titleName}>
                    <Text style={styles.locationName}>通州消防局（地名）</Text>
                    <Text style={styles.cellPhone}>电话: 010-88888888</Text>
                </View>

                <ScrollableTabView
                    initialPage={0}
                    renderTabBar={() => <ScrollableTabBar/>}
                    tabBarPosition='top'
                >
                    <View tabLabel='详情'>
                        <Icon name='description'/>
                        <Text>详情</Text>
                    </View>
                    <View tabLabel='设施'>
                        <Icon name='build'/>
                        <Text>设施</Text>
                    </View>
                    <View tabLabel='责任人'>
                        <Icon name='people'/>
                        <Text>责任人</Text>
                    </View>
                    <View tabLabel='其他'>
                        <Icon name='people'/>
                        <Text>责任人</Text>
                    </View>
                    <View tabLabel='其他'>
                        <Icon name='people'/>
                        <Text>责任人</Text>
                    </View>
                    <View tabLabel='其他'>
                        <Icon name='people'/>
                        <Text>责任人</Text>
                    </View>
                    <View tabLabel='其他'>
                        <Text></Text>
                    </View>
                </ScrollableTabView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    base: {
        // backgroundColor: '#eeeeee',
    },
    iconBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        paddingTop: 5,
        paddingLeft: 40,
        paddingBottom: 10,
        paddingRight: 40,
        borderTopColor: '#eeeeee',
        borderTopWidth: 2,
        // backgroundColor: '#ffffff',
    },
    titleName: {
        paddingTop: 15,
        paddingLeft: 20,
        paddingBottom: 10,
    },
    locationName: {
        fontSize: 20,
    },
    cellPhone: {
        marginTop: 2,
        fontSize: 10,
    },
    bottom: {
        marginBottom: 10,
    },
});
