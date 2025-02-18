import React from "react";
import { Button, Platform, StyleSheet, View } from "react-native";

export default() => {

    const onPress = () => {
        const s1 = {
            fontSize: 18,
        };

        const s2 = {
            fontSize: 20,
            color: 'red',
        };

        const composeStyle = StyleSheet.compose(s1, s2);
        console.log(composeStyle);

        const flattenStyle = StyleSheet.flatten([s1, s2]);
        console.log(flattenStyle);

        console.log(StyleSheet.absoluteFill);

        console.log(StyleSheet.hairlineWidth);
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