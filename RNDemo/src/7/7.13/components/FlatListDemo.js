import React, { useEffect, useRef } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";

export default () => {

    const data = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20
    ];

    const renderItem = (itemInfo) => {
        const { item, index } = itemInfo;
        return (
            <View style={styles.view}>
                <Text style={styles.txt}>{`List item ${item}`}</Text>
            </View>
        );
    };

    const renderItem2 = (itemInfo) => {
        const { item, index } = itemInfo;
        return (
            <View style={styles.view2}>
                <Text style={styles.txt2}>{`List item ${item}`}</Text>
            </View>
        );
    };

    const ListHeader = (
        <View style={styles.header}>
            <Text style={styles.extraTxt}>列表头部</Text>
        </View>
    );

    const ListFooter = (
        <View style={[styles.header, styles.footer]}>
            <Text style={styles.extraTxt}>列表尾部</Text>
        </View>
    );

    const ListEmpty = (
        <View style={styles.listEmpty}>
            <Text style={styles.extraTxt}>暂时无数据哦～</Text>
        </View>
    );

    const flatListRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            // flatListRef.current.scrollToIndex({
            //     index: 10,
            //     viewPosition: 0.5,
            //     animated: true
            // });

            // flatListRef.current.scrollToItem({
            //     item: 5,
            //     viewPosition: 0,
            //     animted: true
            // });

            // flatListRef.current.scrollToOffset({
            //     offset: 200
            // });

            flatListRef.current.scrollToEnd({
                animated: true
            });
        }, 2000);
    }, []);

    return (
        <FlatList
            ref={flatListRef}
            style={styles.flatlist}
            data={data}
            // data={[]}
            renderItem={renderItem}
            keyExtractor={(_, index) => {
                return `item-${index}`;
            }}
            contentContainerStyle={styles.containerStyle}
            showsVerticalScrollIndicator={true}
            onScroll={(event) => {
                console.log(event.nativeEvent.contentOffset)
            }}  
            scrollEventThrottle={16}
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps='handled'
            ListHeaderComponent={ListHeader}
            ListFooterComponent={ListFooter}
            ListEmptyComponent={ListEmpty}
            ItemSeparatorComponent={() => {
                return (
                    <View style={styles.separator}>

                    </View>
                );
            }}
            initialNumToRender={15}
            inverted={false}
            numColumns={1}
            onViewableItemsChanged={(info) => {
                const { viewableItems } = info;
                console.log(viewableItems);
            }}
        >

        </FlatList>

        // <FlatList
        //     style={styles.flatlist}
        //     data={data}
        //     renderItem={renderItem2}
        //     keyExtractor={(_, index) => {
        //         return `item-${index}`;
        //     }}
        //     horizontal={true}
        //     showsHorizontalScrollIndicator={true}
        // >

        // </FlatList>
    );
}

const styles = StyleSheet.create({
    flatlist: {
        width: '100%',
        height: '100%',
    },
    view: {
        width: '100%',
        height: 56,
        justifyContent: 'center'
    },
    txt: {
        width: '100%',
        fontSize: 24,
        color: 'black',
    },
    view2: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt2: {
        width: 200,
        fontSize: 24,
        color: 'black',
    },
    containerStyle: {
        paddingHorizontal: 16,
        paddingTop: 20,
        backgroundColor: '#F5F5F5'
    },
    header: {
        width: '100%',
        height: 48,
        backgroundColor: '#00FF0030',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        backgroundColor: '#FF000030'
    },
    extraTxt: {
        fontSize: 20,
        color: '#666666'
    },
    listEmpty: {
        width: '100%',
        height: 400,
        justifyContent: 'center',
        alignItems: 'center'
    },
    separator: {
        width: '100%',
        height: 2,
        backgroundColor: '#D0D0D0'
    }
});