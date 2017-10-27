import React, {Component} from 'react';
import {ScrollView, View, Text, Image, TextInput, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements'
import CompanyList from './CompanyList';

export default class CompanyDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            companyList: CompanyList,
            companyDetail: companyDetail,
            text: null,
        };
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

                <View style={styles.iconBar}>
                    <View>
                        <Icon name='description' />
                        <Text style={{color: '#333333'}}>详情</Text>
                    </View>

                    <View>
                        <Icon name='build' />
                        <Text style={{color: '#333333'}}>设施</Text>
                    </View>

                    <View>
                        <Icon name='people' />
                        <Text style={{color: '#333333'}}>责任人</Text>
                    </View>
                </View>

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
    cellPhone:{
        marginTop: 2,
        fontSize: 10,
    },
    bottom: {
        marginBottom:10,
    },
});
