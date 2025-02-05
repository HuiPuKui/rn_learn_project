import React, { useRef } from "react";
import { View, ScrollView, StyleSheet, Text, TextInput, Button, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export default () => {

    const array = [1, 2, 3, 4, 5];

    const scrollViewRef = useRef(null);

    const buildListView = () => {
        const array = [];
        for (let i = 0; i < 20; i ++) {
            array.push(
                <View key={`item-${i}`} style={styles.view}>
                    <Text style={styles.txt}>{`List item ${i + 1}`}</Text>
                </View>
            );
        }
        return array;
    };

    return (
        <ScrollView 
            ref={scrollViewRef}
            style={styles.root}
            contentContainerStyle={styles.containerStyle}
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='handled'
            onMomentumScrollBegin={() => {
                console.log(`onMomentumScrollBegin...`);
            }}
            onMomentumScrollEnd={() => {
                console.log(`onMomentumScrollEnd...`);
            }}
            onScroll={(event) => {
                console.log(event.nativeEvent.contentOffset);
            }}
            scrollEventThrottle={16}
            overScrollMode='never'
            scrollEnabled={true}
            contentOffset={{ y: 100 }}
            showsVerticalScrollIndicator={true}
            stickyHeaderIndices={[0]}
        >
            <TextInput style={styles.input}/>
            <Button title='按钮' onPress={() => { 
                scrollViewRef.current.scrollTo({ y: 500, animated: true });
            }} 
            />
            <Button title='按钮' onPress={() => { 
                scrollViewRef.current.scrollToEnd();
            }} 
            />
            {/* <View style={styles.view}>
                <Text style={styles.txt}>1</Text>
            </View>
            
            <View style={styles.view}>
                <Text style={styles.txt}>2</Text>
            </View>

            <View style={styles.view}>
                <Text style={styles.txt}>3</Text>
            </View>

            <View style={styles.view}>
                <Text style={styles.txt}>4</Text>
            </View>

            <View style={styles.view}>
                <Text style={styles.txt}>5</Text>
            </View>

            {array.map((item, index) => {
                return (
                    <View key={`item-${index}`} style={styles.view}>
                        <Text style={styles.txt}>{`List item ${item}`}</Text>
                    </View>
                );
            })} */}

            {buildListView()}
        </ScrollView>

        // <ScrollView 
        //     style={{ width: '100%', height: 200, backgroundColor: 'yellow' }} 
        //     horizontal={true} 
        //     pagingEnabled={true}
        // >
        //     <View style={{ width, height: 200, backgroundColor: 'red' }} />
        //     <View style={{ width, height: 200, backgroundColor: 'blue' }} />
        //     <View style={{ width, height: 200, backgroundColor: 'green' }} />
        // </ScrollView>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    view: {
        width: '100%',
        height: 56,
        justifyContent: 'center'
    },
    txt: {
        fontSize: 24,
        color: 'black'
    },
    containerStyle: {
        paddingHorizontal: 16,
        backgroundColor: '#E0E0E0',
        paddingTop: 20
    },
    input: {
        width: '100%',
        height: 60,
        backgroundColor: '#FF000050'
    },
});
