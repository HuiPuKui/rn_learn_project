import React, { useRef } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import AddAccount from "../components/AddAccount";

import icon_add from '../assets/icon_add.png';

export default () => {

    const addAccountRef = useRef(null);

    const renderTitle = () => {
        return (
            <View style={styles.titleLayout}>
                <Text style={styles.titleTxt}>账号管理</Text>
            </View>
        );
    }

    return (
        <View style={styles.root}>
            { renderTitle() }

            <TouchableOpacity 
                style={styles.addButton}
                activeOpacity={0.5}
                onPress={() => {
                    addAccountRef.current.show()
                }}
            >
                <Image style={styles.addImg} source={icon_add} />
            </TouchableOpacity>

            <AddAccount ref={addAccountRef} />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%'
    },
    titleLayout: {
        width: '100%',
        height: 46,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleTxt: {
        fontSize: 18,
        color: '#333333',
        fontWeight: 'bold'
    },
    addButton: {
        position: 'absolute',
        bottom: 64,
        right: 28,
    },
    addImg: {
        width: 56,
        height: 56,
        resizeMode: 'contain',
    }
})