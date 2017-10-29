import React, {Component} from 'react';
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';


import Lightbox from 'react-native-lightbox';

const WINDOW_WIDTH = Dimensions.get('window').width;
const BASE_PADDING = 10;

const renderCarousel = () => (
        <Image
            style={{ flex: 1 }}
            resizeMode="contain"
            source={require('../../../Statics/Pictures/0001095.jpg')}
        />
);

export default class ImageTab extends Component{
    render(){
        return(
            <ScrollView style={styles.container}>
                <Lightbox springConfig={{tension: 15, friction: 7}} swipeToDismiss={false} renderContent={renderCarousel}>
                    <Text>消防水源图</Text>
                    <Image
                        style={styles.carousel}
                        resizeMode="contain"
                        source={require('../../../Statics/Pictures/0001095.jpg')}
                    />
                </Lightbox>
            </ScrollView>
        );
    }
};


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: BASE_PADDING
    },
    closeButton: {
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        padding: 8,
        borderRadius: 3,
        textAlign: 'center',
        margin: 10,
        alignSelf: 'flex-end',
    },
    customHeaderBox: {
        height: 150,
        backgroundColor: '#6C7A89',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        marginLeft: -BASE_PADDING,
        marginRight: -BASE_PADDING,
    },
    col: {
        flex: 1,
    },
    square: {
        width: WINDOW_WIDTH / 2,
        height: WINDOW_WIDTH / 2,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    squareFirst: {
        backgroundColor: '#C0392B',
    },
    squareSecond: {
        backgroundColor: '#019875',
    },
    squareText: {
        textAlign: 'center',
        color: 'white',
    },
    carousel: {
        height: WINDOW_WIDTH - BASE_PADDING * 2,
        width: WINDOW_WIDTH - BASE_PADDING * 2,
        backgroundColor: 'white',
    },
    contain: {
        flex: 1,
        height: 150,
    },
    text: {
        marginVertical: BASE_PADDING * 2,
    },
});



