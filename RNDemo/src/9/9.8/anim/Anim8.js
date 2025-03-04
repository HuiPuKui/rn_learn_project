import React, { useRef } from "react";
import { Animated, Button, Easing, StyleSheet, View } from "react-native";

export default () => {

    const vector = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    return (
        <View style={styles.root}>
            <Button 
                title="按钮"
                onPress={() => {
                    Animated.timing(vector, {
                        toValue: { x: 300, y: 400 },
                        duration: 500,
                        useNativeDriver: false
                    }).start();
                }}
            />

            <Animated.View
                style={[
                    styles.view,
                    {
                        marginLeft: vector.x,
                        marginTop: vector.y,
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