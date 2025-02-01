import React from "react";
import { View, SafeAreaView } from "react-native"

export default () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ width: 200, height: 200, backgroundColor: 'blue' }} />
        </SafeAreaView>
    );
}