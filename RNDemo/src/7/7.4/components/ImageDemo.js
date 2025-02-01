import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";

import avatar from "../assets/images/avatar.png"
import { imageUri } from "../constants/Uri";
import icon_setting from "../assets/images/icon_setting.png"
export default () => {

    const imgRef = useRef(null);

    useEffect(() => {
        Image.getSize(imageUri, (width, height) => {
            console.log(`width=${width} height=${height}`);
        }, (error) => {
            console.log(error);
        })

        Image.prefetch(imageUri).then(data => {
            console.log(data);
        }).catch(e => {
            console.log(e);
        });
    }, []);

    return (
        <View style={styles.root}>
            <Image style={styles.img1} source={avatar} />

            <Image
                style={styles.img2} 
                source={{ uri: imageUri }}
                defaultSource={avatar}
                blurRadius={3}
                fadeDuration={2000}
                onLoad={(event) => {
                    console.log(event.nativeEvent);
                }}
                onError={() => {
                    console.log(`onError ...`);
                }}
                onLoadStart={() => {
                    console.log(`onLoadStart ...`);
                }}
                onLoadEnd={() => {
                    console.log(`onLoadEnd ...`);
                }}
            />

            <Image 
                ref={imgRef}
                style={styles.img3} 
                source={icon_setting}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F5F5F5'
    },
    img1: {
        width: 200,
        height: 120,
        resizeMode: 'stretch',
        backgroundColor: '#A0A0A0',
    },
    img2: {
        width: 200,
        height: 120,
        resizeMode: 'stretch',
        backgroundColor: '#A0A0A0',
    },
    img3: {
        width: 200,
        height: 120,
        resizeMode: 'stretch',
        tintColor: 'red',
    },
});