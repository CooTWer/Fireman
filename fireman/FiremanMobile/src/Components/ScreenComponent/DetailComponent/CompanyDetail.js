import React, {Component} from 'react';
import {ScrollView, View, Text, Image, TextInput, StyleSheet} from 'react-native';
import CompanyList from '../CompanyListComponent/CompanyList';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Tabs from '../../UtilsComponent/TabsComponent/Tabs';
import CarouselSnap from '../../UtilsComponent/CarouselComponent/CarouselSnap';
import DetailData from '../../../Statics/MockData/DetailData';
import BasicInfo from '../../UtilsComponent/TabsComponent/BasicInfo';
import KeyPositionInfo from '../../UtilsComponent/TabsComponent/KeyPositionInfo';
import ImageTab from '../../UtilsComponent/TabsComponent/ImageTab';
import PrimaryDevice from '../../UtilsComponent/TabsComponent/PrimaryDevice';

export default class CompanyDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companyList: CompanyList,
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
        const companyDetail = this.props.navigation.state.params;
        return (
            <ScrollView>
                <CarouselSnap navigation={this.props.navigation} />
                <View style={styles.titleName}>
                    <Text style={styles.locationName}>{companyDetail.address}（地名）</Text>
                    <Text style={styles.cellPhone}>电话: 010-88888888</Text>
                </View>

                <ScrollableTabView
                    initialPage={0}
                    tabBarPosition="top"
                    renderTabBar={() => <Tabs tabsInfo={tabsInfo}/>}
                >
                    <View style={styles.content} tabLabel='key1'>
                        {companyDetail.basicInfo && <BasicInfo basicInfo={companyDetail.basicInfo} />}
                        {companyDetail.keyPosition && <KeyPositionInfo positionArray={companyDetail.keyPosition} />}
                    </View>
                    <View style={styles.content} tabLabel='key2'>
                        <PrimaryDevice devicesInfo={companyDetail.fireFightingDevice}/>
                    </View>
                    <View style={styles.content} tabLabel='key3'>
                        <Text>#3</Text>
                    </View>
                    <View style={styles.content} tabLabel='key4'>
                        <ImageTab/>
                    </View>
                </ScrollableTabView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
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
    content: {
        height: 1000,
    }
});
