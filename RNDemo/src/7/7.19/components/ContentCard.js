import React, { useRef, useState } from "react";
import { Dimensions, FlatList, Image, ScrollView, Settings, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import icon_1 from "../assets/images/icon_1.png";
import icon_2 from "../assets/images/icon_2.png";
import icon_3 from "../assets/images/icon_3.png";

const { width } = Dimensions.get('window');

export default () => {

    const scrollViewRef = useRef(null);

    const [buttonIndex, setButtonIndex] = useState(0);

    const buttonView = (title, index, callback) => {
        return (
            <TouchableOpacity 
                style={styles.buttonView}
                onPress={callback}
            >
                <Text style={styles.buttonTxt}>
                    {title}
                </Text>
                { index === buttonIndex && <View style={styles.colorView} /> }
            </TouchableOpacity>
        );
    };

    const header = () => {
        return (
            <View style={styles.header}>
                {buttonView('笔记', 0, () => {
                    setButtonIndex(0);
                    scrollViewRef.current.scrollTo({
                        x: width * 0
                    })
                })}
                {buttonView('收藏', 1, () => {
                    setButtonIndex(1);
                    scrollViewRef.current.scrollTo({
                        x: width * 1
                    })
                })}
                {buttonView('赞过', 2, () => {
                    setButtonIndex(2);
                    scrollViewRef.current.scrollTo({
                        x: width * 2
                    })
                })}
            </View>
        );
    };

    const card = (props) => {
        return (
            <View style={[styles.card, props.style]}>
                <Image style={styles.cardImage} source={props.imageUri} />
                <Text style={styles.cardTxt} >{props.txt}</Text>
                <TouchableOpacity style={styles.cardButton}>
                    <Text style={styles.cardButtonTxt}>{props.buttonTxt}</Text>
                </TouchableOpacity>
            </View>
        );
    };

    const flatList = () => {
        return (
            <ScrollView
                ref={scrollViewRef}
                style={styles.scrollView}
                horizontal={true}
                pagingEnabled={true}
                scrollEnabled={false}
            >
                {card({ imageUri: icon_1, txt: '用一句话分享今天的快乐吧～', buttonTxt: '去分享' })}
                {card({ imageUri: icon_2, txt: '快去收藏你喜欢的作品吧～', buttonTxt: '去收藏' })}
                {card({ imageUri: icon_3, txt: '你还没有给作品点赞哦～', buttonTxt: '去点赞' })}
            </ScrollView>
        );
    };

    return (
        <View style={styles.root}>
            {header()}
            <View style={{ width: '100%', height: 1, backgroundColor: '#00000030', marginHorizontal: 5 }} />
            {flatList()}
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F0F0F0',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: 'column'
    },
    header: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonView: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15
    },
    buttonTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00000080',
        marginTop: 5
    },
    scrollView: {
        width: '100%',
        height: '90%',
    },
    card: {
        width: width,
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 50
    },
    cardImage: {
        width: 100,
        height: 100
    },
    cardButton: {
        width: 80,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderColor: '#00000030',
        borderWidth: 2
    },
    cardTxt: {
        fontSize: 15,
        color: '#00000080',
        marginVertical: 10
    },
    cardButtonTxt: {
        fontSize: 15,
    },
    colorView: {
        width: '80%',
        height: 2,
        backgroundColor: '#FFAAAA',
        position: 'absolute',
        bottom: 5
    }
});