import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default () => {

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
    }
})