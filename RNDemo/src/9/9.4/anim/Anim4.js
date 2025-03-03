import React, { useReducer, useRef } from "react";
import { Animated, Button, StyleSheet, View } from "react-native";

export default () => {

    const marginLeft = useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.root}>
            <Button 
                title="按钮"
                onPress={() => {
                    Animated.timing(marginLeft, {
                        toValue: 300,
                        duration: 500,
                        useNativeDriver: false,
                    }).start()
                }}
            />

            <Animated.View 
                style={[
                    styles.view, 
                    // { marginLeft: marginLeft }
                    // { transform: [{ translateX: marginLeft }]}
                    {
                        position: 'absolute',
                        top: 60,
                        left: marginLeft
                    }
                ]}>

            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    view: {
        width: 100,
        height: 100,
        backgroundColor: '#3050FF',
        marginTop: 20,
    }
})