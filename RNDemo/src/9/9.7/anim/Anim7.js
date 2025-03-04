import React, { useRef } from "react";
import { Animated, Button, Easing, StyleSheet, View } from "react-native";

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

                        // easing: Easing.back(3),
                        // easing: Easing.ease,
                        // easing: Easing.bounce,
                        // easing: Easing.elastic(4),

                        // easing: Easing.linear,
                        // easing: Easing.quad,
                        // easing: Easing.cubic,

                        // easing: Easing.bezier(0.8, 0.74, 0.9, 0.25),
                        // easing: Easing.circle,
                        // easing: Easing.sin,
                        // easing: Easing.exp,

                        // easing: Easing.in(Easing.bounce),
                        // easing: Easing.out(Easing.exp),
                        easing: Easing.inOut(Easing.elastic(3)),

                        useNativeDriver: false
                    }).start();
                }}
            />

            <Animated.View
                style={[
                    styles.view,
                    {
                        marginLeft: marginLeft
                    }
                ]}
            >

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