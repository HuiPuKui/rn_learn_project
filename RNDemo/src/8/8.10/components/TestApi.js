import React from "react";
import { Button, StyleSheet, Vibration, View } from "react-native";

export default () => {

    const onPress = () => {
        Vibration.vibrate();
        Vibration.vibrate(1000); // iOS 震动时间固定 400ms，这个只支持 Android
        
        Vibration.vibrate([100, 200, 300, 400], true);
        Vibration.cancel(); // 取消震动
    };

    return (
        <View style={styles.root}>
            <Button 
                title="按钮"
                onPress={onPress}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%'
    }
})