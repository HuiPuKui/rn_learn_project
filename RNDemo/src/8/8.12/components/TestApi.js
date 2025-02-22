import React from "react";
import { Button, StyleSheet, View } from "react-native";

export default () => {

    return (
        <View style={styles.root}>
            <View 
                style={[
                    {
                        width: 100,
                        height: 100,
                        backgroundColor: '#3050FF',
                        marginTop: 60,
                        marginLeft: 60
                    },
                    {
                        transform: [
                            {translateX: 150},
                            {translateY: 150},
                            {scale: 1.5},
                            {scaleX: 1.5},
                            {scaleY: 1.5},
                            {rotateX: '45deg'},
                            {rotateY: '45deg'},
                            {rotateZ: '45deg'},
                        ]
                    }
                ]}
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