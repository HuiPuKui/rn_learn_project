import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet } from "react-native";

export default () => {

    const viewRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            viewRef.current.setNativeProps({
                style: { backgroundColor: 'blue', width: 300 }
            });
        }, 2000);
    }, []);

    return (
        <View style={styles.root}>
            <View 
                ref={viewRef}
                style={styles.subView1} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#C0C0C0',
    },
    subView1: {
        width: '25%',
        height: 100,
        backgroundColor: 'red',
    },
});