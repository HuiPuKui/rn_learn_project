import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default () => {

    return (
        <View style={styles.root}>
            <Text 
                style={styles.txt} 
                numberOfLines={1} 
                ellipsizeMode='tail' 
                selectable={true} 
                selectionColor='red' 
                onPress={() => {
                    console.log(`onPress ...`);
                }}
                onLongPress={() => {
                    console.log(`onLongPress ...`);
                }}
                allowFontScaling={false}
            >
                0123456789
            </Text>

            <View style={styles.txt1Container}>
                <Text style={styles.txt1}>
                    本次期末考试不及格人数
                    <Text style={styles.innerTxt}>
                        8
                    </Text>
                    人
                </Text>
            </View>

            <Text style={styles.txt2}>
                阴影 DEMO
            </Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F0F0F0',
    },
    txt: {
        fontSize: 20,
        fontFamily: '',
        color: '#3025FF'
    },
    txt1Container: {
        width: 300,
        height: 50,
        backgroundColor: '#C0C0C0',
        justifyContent: 'center',  // 垂直居中
        alignItems: 'center',  // 水平居中
    },
    txt1: {
        backgroundColor: '#C0C0C0',
        fontSize: 20,
        color: '#3025FF',
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline line-through'
    },
    txt2: {
        fontSize: 40,
        color: '#3025FF',
        textShadowColor: '#808080',
        textShadowOffset: { width: 2, height: 4 },
        textShadowRadius: 8
    },
    innerTxt: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
    },
});