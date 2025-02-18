import React from "react";
import { Button, Platform, StyleSheet, View } from "react-native";

export default() => {

    const onPress = () => {
        // console.log(Platform.OS);
        // console.log(Platform.Version);
        // console.log(Platform.constants);

        // console.log(Platform.isPad);
        // console.log(Platform.isTV);

        const style = Platform.select({
            android: {
                marginTop: 20
            },
            ios: {
                marginTop: 0
            },
            default: {
                marginTop: 10
            }
        });

        console.log(style);
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

        // paddingTop: Platform.select({
        //     android: 20,
        //     ios: 0,
        //     default: 10
        // })
        
        ...Platform.select({
            android: {
                paddingTop: 20
            },
            ios: {
                paddingTop: 0
            },
            default: {
                paddingTop: 10
            }
        })
    }
})