import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from "react-native";

import NavigationBar from "./NavigationBar";
import UserInfoCard from "./UserInfoCard";

import UserInfo from "../modules/UserInfo";

import icon_bg from "../assets/images/icon_bg.png"


export default () => {

    const userInfo = new UserInfo(
        "../assets/images/default_avatar.png",
        "大公爵",
        "118302851",
        "点击关注，填写简介",
        1,
        142,
        2098,
        1042
    );

    return (
        <View style={styles.root}>
            <ImageBackground 
                style={styles.ImageBackground}
                source={icon_bg}
            >
                <SafeAreaView style={styles.safeArea}>
                    <NavigationBar />
                    <UserInfoCard userInfo={userInfo} />
                </SafeAreaView>
                <View style={styles.view2}>

                </View>
            </ImageBackground>
        </View>
        
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
    },
    ImageBackground: {
        width: '100%',
        height: '100%'
    },
    safeArea: {
        width: '100%',
        height: '40%',
        // backgroundColor: 'transparent'
        // backgroundColor: 'yellow'
    },
    view2: {
        width: '100%',
        height: '60%',
        // backgroundColor: 'transparent'
        // backgroundColor: 'blue'
    }
});

