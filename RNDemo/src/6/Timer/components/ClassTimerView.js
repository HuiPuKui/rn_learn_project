import { useState, useEffect } from "react";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

class ClassTimerView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {

        return (
            <View style={styles.TimerView}>
                <Text style={styles.Text1}>
                    RN 计数器
                </Text>

                <Text style={styles.Text2}>
                    {this.state.count}
                </Text>
            </View>
        );
    }
};

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

export default ClassTimerView;