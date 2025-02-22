import React, { useEffect } from "react";
import { Button, Keyboard, StyleSheet, TextInput, View } from "react-native";

export default () => {

    const onPress = () => {
        Keyboard.dismiss();
    };

    const onKeyboardShow = () => {
        console.log('onKeyboardShow');
    };

    const onKeyboardHide = () => {
        console.log('onKeyboardHide');
    };

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', onKeyboardShow);
        const hideSubscription = Keyboard.addListener('keyboardDidHide', onKeyboardHide);

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        }
    }, []);

    return (
        <View style={styles.root}>
            <Button 
                title="按钮"
                onPress={onPress}
            />

            <TextInput 
                style = {{ width: '100%', height: 56, backgroundColor: '#E0E0E0'}}
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