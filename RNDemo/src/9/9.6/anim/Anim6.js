import React, { useRef } from "react";
import { Animated, Button, StyleSheet, View } from "react-native";
import { maxWorkers } from "../../../../metro.config";

export default () => {

    const marginLeft = useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.root}>
            <Button 
                title="按钮"
                onPress={() => {
                    Animated.spring(marginLeft, {
                        toValue: 200,

                        // 第一组
                        // bounciness: 8,
                        // speed: 12,

                        // 第二组
                        // tension: 40,
                        // friction: 7,

                        // 第三组
                        stiffness: 100,
                        damping: 10,
                        mass: 1,
                        useNativeDriver: false,
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