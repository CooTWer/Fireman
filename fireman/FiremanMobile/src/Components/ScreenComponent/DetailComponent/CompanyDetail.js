import React, {Component} from 'react';
import {ScrollView, View, Text, Image, TextInput, StyleSheet} from 'react-native';
import CompanyList from '../CompanyListComponent/CompanyList';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Tabs from '../../UtilsComponent/TabsComponent/Tabs';

export default class CompanyDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            companyList: CompanyList,
            text: null,
        };
    }

    render() {
        const tabsInfo = [
            {
                tabNames: '详情',
                tabIconName: 'ios-paper'
            },
            {
                tabNames: '设施',
                tabIconName: 'ios-albums'
            },
            {
                tabNames: '记录',
                tabIconName: 'ios-paper-plane'
            },
            {
                tabNames: '其他',
                tabIconName: 'ios-person-add'
            }
        ];
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
                    renderTabBar={() => <Tabs tabsInfo={tabsInfo}/>}
                    // tabBarPosition='top'
                >
                    <View style={styles.content} tabLabel='key1'>
                        <Text>#1</Text>
                    </View>
                    <View style={styles.content} tabLabel='key2'>
                        <Text>#2</Text>
                    </View>
                    <View style={styles.content} tabLabel='key3'>
                        <Text>#3</Text>
                    </View>
                    <View style={styles.content} tabLabel='key4'>
                        <Text>#4</Text>
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
