import React from "react";
import { View, Button, StyleSheet, PixelRatio } from "react-native";

export default () => {

    const onPress = () => {

        console.log(PixelRatio.get());
        console.log(PixelRatio.getFontScale());
        console.log(PixelRatio.getPixelSizeForLayoutSize(200));
        
    };

    return (
        <View style={styles.root} >
            <Button 
                title="按钮"
                onPress={onPress}
            />

            <View style={styles.view}>
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%'
    },
    view: {
        width: '100%',
        backgroundColor: 'red'
    },
    subView: {
        width: '100%',
        backgroundColor: 'green',
        height: PixelRatio.roundToNearestPixel(32.1)
    }
});