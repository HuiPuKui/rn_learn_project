import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default (props) => {

    const [count, setCount] = useState(0);

    useEffect(() => {

        const timer = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return (() => {
            clearInterval(timer);
        });
    }, []);

    return (
        <View style={styles.TimerView}>
            <Text style={styles.Text1}>
                RN 计数器
            </Text>

            <Text style={styles.Text2}>
                {count}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    TimerView: {
        width: '100%',
        height: '100%',
        backgroundColor: 'gray',
        flexDirection: 'column',
        alignItems: 'center'
    },
    Text1: {
        marginVertical: '25%',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    Text2: {
        fontSize: 60,
        fontWeight: 'bold',
        color: 'blue'
    }
})