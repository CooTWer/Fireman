import React, {Component, PropTypes} from 'react';
import {View, Text, ListView, StyleSheet, TouchableHighlight} from 'react-native';
import {Button} from 'react-native-elements';
import { List, ListItem } from 'react-native-elements';
import CompanyInfoRow from './CompanyInfoRow';
import companyData from '../../Data';

const styles = StyleSheet.create({
   container: {
       flex: 1,
       marginTop: 20
   },

    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'red',
    }
});


export default class CompanyList extends React.Component{

    static navigationOptions = {
        title: 'PeopleList'
    };
    constructor(props, context){
        super(props, context);

        const ds = new ListView.DataSource({rowHasChanged:(r1, r2)=> r1 !== r2});
        this.state = {
            datasource: ds.cloneWithRows(
                companyData
            ),
        };
    }

    _renderRow(rowData,navigate) {
        return (
                    <CompanyInfoRow details={rowData} navigate={navigate}/>
        );
    }

    render(){
        const { navigate } = this.props.navigation;
        return(

            <ListView
                style={styles.container}
                dataSource={this.state.datasource}
                renderRow={(rowData) => this._renderRow(rowData,navigate)}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator}/>}
            />
        );
    }


}

