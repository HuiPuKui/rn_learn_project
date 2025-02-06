import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import icon_menu from "../assets/images/icon_menu.png";
import icon_share from "../assets/images/icon_share.png";

export default (props) => {

    return (
        <View style={[styles.navigationBar, props.style]}>
            <TouchableOpacity style={styles.menu}>
                <Image style={styles.menuImage} source={icon_menu} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.share}>
                <Image style={styles.shareImage} source={icon_share} />
            </TouchableOpacity>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    navigationBar: {
        width: '100%',
        height: 40,
        backgroundColor: 'transparent',
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    menu: {
        width: 40,
        height: 40,
        justifyContent: 'center'
    },
    menuImage: {
        width: '80%',
        height: '80%'
    },
    share: {
        width: 40,
        height: 40,
        justifyContent: 'center'
    },
    shareImage: {
        width: '80%',
        height: '80%'
    }
});