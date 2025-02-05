import React from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";

export default () => {

    return (
        <View style={styles.root}>
            <TouchableWithoutFeedback>
                <View style={styles.button}>
                    <Text style={styles.txt}>
                        按钮
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F0F0F0'
    },
    button: {
        width: 300,
        height: 65,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
});
