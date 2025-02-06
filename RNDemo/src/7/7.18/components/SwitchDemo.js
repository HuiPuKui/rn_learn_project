import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

export default () => {

    const [switchValue, setSwitchValue] = useState(false);

    return (
        <View style={styles.root}>
            <Switch  
                value={switchValue}
                onValueChange={(value) => {
                    console.log(`value=${value}`);
                    setSwitchValue(value);
                }}
                disabled={false}
                trackColor={{ true: 'red', false: '#808080' }}
                ios_backgroundColor='#808080'
                thumbColor={switchValue ? '#2030FF' : '#303030'}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%'
    },
});