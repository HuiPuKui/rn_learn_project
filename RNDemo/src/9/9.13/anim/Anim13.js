import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing, Image, LayoutAnimation, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import icon_home from "../assets/images/icon_home.png";
import icon_mine from '../assets/images/icon_mine.png';
import icon_gift from '../assets/images/icon_gift.png';
import icon_show from '../assets/images/icon_show.png';

export default () => {

    const [cardIndex, setCardIndex] = useState(1);

    const width1 = useRef(new Animated.Value(200)).current;
    const width2 = useRef(new Animated.Value(64)).current;
    const width3 = useRef(new Animated.Value(64)).current;
    const width4 = useRef(new Animated.Value(64)).current;

    useEffect(() => {
        anim1(cardIndex === 1);
        anim2(cardIndex === 2);
        anim3(cardIndex === 3);
        anim4(cardIndex === 4);
    }, [cardIndex]);

    const anim1 = (isOpen) => {
        Animated.timing(width1, {
            toValue: isOpen ? 200 : 64,
            duration: isOpen ? 500 : 300,
            easing: isOpen ? Easing.elastic(3) : Easing.ease,
            useNativeDriver: false
        }).start();
    };

    const anim2 = (isOpen) => {
        Animated.timing(width2, {
            toValue: isOpen ? 200 : 64,
            duration: isOpen ? 500 : 300,
            easing: isOpen ? Easing.elastic(3) : Easing.ease,
            useNativeDriver: false
        }).start();
    };

    const anim3 = (isOpen) => {
        Animated.timing(width3, {
            toValue: isOpen ? 200 : 64,
            duration: isOpen ? 500 : 300,
            easing: isOpen ? Easing.elastic(3) : Easing.ease,
            useNativeDriver: false
        }).start();
    };

    const anim4 = (isOpen) => {
        Animated.timing(width4, {
            toValue: isOpen ? 200 : 64,
            duration: isOpen ? 500 : 300,
            easing: isOpen ? Easing.elastic(3) : Easing.ease,
            useNativeDriver: false
        }).start();
    };

    const card1 = () => {
        return (
            <TouchableOpacity 
                activeOpacity={0.8}
                onPress={() => { 
                    setCardIndex(1);
                }}
            >
                <Animated.View 
                    style={{ 
                        height: 60, 
                        flexDirection: 'row', 
                        alignItems: 'center',   
                        marginVertical: 16,
                        borderTopRightRadius: 28,
                        borderBottomRightRadius: 28,
                        backgroundColor: '#2030ff',
                        width: width1, 
                        paddingLeft: 16,
                        overflow: 'hidden',
                        opacity: cardIndex === 1 ? 1 : 0.75 
                    }}
                >
                    <Image style={styles.image} source={icon_home} />
                    <Text style={[styles.txt, ]} numberOfLines={1} ellipsizeMode='clip' >首页推荐</Text>
                    <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#00FF00', marginLeft: 10 }}/> 
                </Animated.View>
                
            </TouchableOpacity>
        );
    }

    const card2 = () => {
        return (
            <TouchableOpacity 
                activeOpacity={0.8}
                onPress={() => { 
                    setCardIndex(2);
                }}
            >
                <Animated.View 
                    style={{ 
                        height: 60, 
                        flexDirection: 'row', 
                        alignItems: 'center',   
                        marginVertical: 16,
                        borderTopRightRadius: 28,
                        borderBottomRightRadius: 28,
                        backgroundColor: '#2030ff',
                        width: width2, 
                        paddingLeft: 16,
                        overflow: 'hidden',
                        opacity: cardIndex === 1 ? 1 : 0.75 
                    }}
                >
                    <Image style={styles.image} source={icon_show} />
                    <Text style={[styles.txt, ]} numberOfLines={1} ellipsizeMode='clip' >热门直播</Text>
                    <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#00FF00', marginLeft: 10 }}/> 
                </Animated.View>
                
            </TouchableOpacity>
        );
    }

    const card3 = () => {
        return (
            <TouchableOpacity 
                activeOpacity={0.8}
                onPress={() => { 
                    setCardIndex(3);
                }}
            >
                <Animated.View 
                    style={{ 
                        height: 60, 
                        flexDirection: 'row', 
                        alignItems: 'center',   
                        marginVertical: 16,
                        borderTopRightRadius: 28,
                        borderBottomRightRadius: 28,
                        backgroundColor: '#2030ff',
                        width: width3, 
                        paddingLeft: 16,
                        overflow: 'hidden',
                        opacity: cardIndex === 1 ? 1 : 0.75 
                    }}
                >
                    <Image style={styles.image} source={icon_gift} />
                    <Text style={[styles.txt, ]} numberOfLines={1} ellipsizeMode='clip' >我的礼物</Text>
                    <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#00FF00', marginLeft: 10 }}/> 
                </Animated.View>
                
            </TouchableOpacity>
        );
    }

    const card4 = () => {
        return (
            <TouchableOpacity 
                activeOpacity={0.8}
                onPress={() => { 
                    setCardIndex(4);
                }}
            >
                <Animated.View 
                    style={{ 
                        height: 60, 
                        flexDirection: 'row', 
                        alignItems: 'center',   
                        marginVertical: 16,
                        borderTopRightRadius: 28,
                        borderBottomRightRadius: 28,
                        backgroundColor: '#2030ff',
                        width: width4, 
                        paddingLeft: 16,
                        overflow: 'hidden',
                        opacity: cardIndex === 1 ? 1 : 0.75 
                    }}
                >
                    <Image style={styles.image} source={icon_mine} />
                    <Text style={[styles.txt, ]} numberOfLines={1} ellipsizeMode='clip' >个人信息</Text>
                    <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#00FF00', marginLeft: 10 }}/> 
                </Animated.View>
                
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.root}>
            {card1()}
            {card2()}
            {card3()}
            {card4()}
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    cardView: {
        height: 60,
        backgroundColor: 'blue',
        flexDirection: 'row',
        alignItems: 'center',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
    },
    image: {
        width: 32,
        height: 32,
        tintColor: 'white'
    },
    txt: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 16
    }
})