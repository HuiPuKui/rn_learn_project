import React, { useEffect } from "react";
import { Button, Dimensions, useWindowDimensions, View } from "react-native";

export default () => {

    const { width, height } = useWindowDimensions();
    console.log(`width=${width}, height=${height}`);

    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', (window, screen) => {
            console.log(window);
            console.log(screen);
        });

        return  () => {
            subscription.remove();
        };
    }, []);

    const onPress = () => {
        // const { width, height } = Dimensions.get('window');
        // console.log(`width=${width}, height=${height}`);

        // const { scale, fontScale } = Dimensions.get('window');
        // console.log(`scale=${scale}, fontScale=${fontScale}`);

        // const { width, height, scale, fontScale } = Dimensions.get('screen');
        // console.log(`width=${width}, height=${height}, scale=${scale}, fontScale=${fontScale}`);
    };

    return (
        <View>
            <Button
                title="按钮"
                onPress={onPress}
            />
        </View>
    );
}