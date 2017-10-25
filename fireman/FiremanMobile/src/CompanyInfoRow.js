import React, {Component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center'
    },

    text: {
        marginLeft: 12,
        fontSize: 16
    },

    photo: {
        height: 40,
        width: 40,
    }
});

class CompanyInfoRow extends React.Component {
    constructor(props){
        super(props);
        this._navigateToDetailPage = this._navigateToDetailPage.bind(this);
    }

    render(){
        return(
            <View style={styles.container}>
                <Image source={{uri: this.props.details.picture.large}} style={styles.photo} />
                <Text style={styles.text} onPress={()=> {
                    console.log('ccc');
                    this._navigateToDetailPage();
                }}>
                    {`${this.props.details.name.first} ${this.props.details.name.last}`}
                </Text>
            </View>
        );
    }

    _navigateToDetailPage(){
        this.props.navigate('Detail');
    }
}


export default CompanyInfoRow;