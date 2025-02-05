import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default () => {

    return (
        <View style={styles.root}>
            <Button 
                title="按 钮"
                color='green'
                onPress={() => {
                    console.log(`onPress ...`);
                }}
                disabled={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F0F0F0'
    }
});