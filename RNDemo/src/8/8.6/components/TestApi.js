import React from "react";
import { Button, Linking, Platform, StyleSheet, View } from "react-native";

export default() => {

    const onPress = () => {
        // if (Linking.canOpenURL('https://www.baidu.com')) {
        //     Linking.openURL('https://www.baidu.com');
        // }

        // Linking.openURL('maps:37.2122,12.222'); // iOS 是 maps，Android 是 geo
        // Linking.openURL('tel:10086');
        // Linking.openURL('sms:10086');
        // Linking.openURL('mailto:10086@qq.com');

        // Linking.openURL('schemeTest://page?name=张三')

        // Linking.openSettings();

        console.log(Linking.getInitialURL());
    };

    return (
        <View style={styles.root} >
            <Button 
                title="按钮"
                onPress={onPress}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
    },
    test: {
        ...StyleSheet.absoluteFill,
        backgroundColor: '#FF000030',
    }
})