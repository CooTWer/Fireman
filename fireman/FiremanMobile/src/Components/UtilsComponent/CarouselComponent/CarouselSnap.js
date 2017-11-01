import React, {Component} from 'react';
import { View, ScrollView, Text, StatusBar } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {CAROUSEL_ENTITY} from '../../../Statics/MockData/Slides';
import styles, {colors} from '../../../Styles/Carousel.Styles';
import { sliderWidth, itemWidth } from '../../../Styles/SlideEntity.Style';
import SlideEntity from './SlideEntity'

const SLIDE_FIRST_ITEM = 1;

export default class CarouselSnap extends Component{

    constructor (props){
        super(props);

        const {gender, name, location} = this.props.navigation.state.params;
        this.state = {
            slider1ActiveSlide: SLIDE_FIRST_ITEM,
            slider1Ref: null
        };

    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SlideEntity
                data={item}
                even={(index + 1) % 2 === 0}
                parallax={true}
                parallaxProps={parallaxProps}
            />
        );
    }

    get buildCarousel (){
        const { slider1ActiveSlide, slider1Ref } = this.state;
        
        return(
            <View style={styles.carouselContainer}>
                <Carousel
                    ref={(c) => { if (!this.state.slider1Ref) {this.setState({slider1Ref:c})}}}
                    data={CAROUSEL_ENTITY}
                    renderItem={this._renderItemWithParallax}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    hasParallaxImages={true}
                    firstItem={SLIDE_FIRST_ITEM}
                    inactiveSlideScale={0.94}
                    inactiveSlideOpacity={0.7}
                    enableMomentum={false}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    loop={true}
                    loopClonesPerSide={2}
                    autoplay={true}
                    autoplayDelay={500}
                    autoplayInterval={3000}
                    onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                <Pagination
                    dotsLength={CAROUSEL_ENTITY.length}
                    activeDotIndex={slider1ActiveSlide}
                    containerStyle={styles.paginationContainer}
                    dotColor={'rgba(255, 255, 255, 0.92)'}
                    dotStyle={styles.paginationDot}
                    inactiveDotColor={colors.black}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    carouselRef={slider1Ref}
                    tappableDots={!!slider1Ref}
                />
            </View>
        );
    }

    
    render(){
        return(
            <View style={styles.container}>
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollViewContentContainer}
                    indicatorStyle={'white'}
                    scrollEventThrottle={200}
                    directionalLockEnabled={true}
                >
                    {this.buildCarousel}
                </ScrollView>
            </View>
        );
    }
}