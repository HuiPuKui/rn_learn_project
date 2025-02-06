import React, { useEffect, useRef } from "react";
import { View, SectionList, Text, StyleSheet } from "react-native";
import { SectionData } from "../constants/Data";

export default () => {

    const renderItem = ({ item, index, section }) => {
        return (
            <View style={styles.view}>
                <Text style={styles.txt}>{item}</Text>
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

    const renderSectionHeader = ({ section }) => {
        return (
            <View style={styles.sectionHeaderView}>
                <Text style={styles.sectionHeaderTxt}>{section.type}</Text>
            </View>
        );
    };

    const sectionListRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            sectionListRef.current.scrollToLocation({
                sectionIndex: 1,
                itemIndex: 3,
                viewPosition: 0,
                animated: true
            });
        }, 2000);
    }, []);

    return (
        <SectionList 
            ref={sectionListRef}
            style={styles.sectionList}
            sections={SectionData}
            renderItem={renderItem}
            keyExtractor={(item, index) => {
                return `${item}-${index}`;
            }}
            contentContainerStyle={styles.containerStyle}
            showsVerticalScrollIndicator={true}
            onScroll={(event) => {
                console.log(event.nativeEvent.contentOffset);
            }}
            scrollEventThrottle={16}
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='handled'
            ListHeaderComponent={ListHeader}
            ListFooterComponent={ListFooter}
            renderSectionHeader={renderSectionHeader}
            ItemSeparatorComponent={() => {
                return (
                    <View style={styles.separator}/>
                );
            }}
            stickySectionHeadersEnabled={true}
        />
    );
}

const styles = StyleSheet.create({
    sectionList: {
        width: '100%',
        height: '100%'
    },
    view: {
        width: '100%',
        height: 56,
        justifyContent: 'center'
    },
    txt: {
        width: '100%',
        fontSize: 20,
        color: '#333333',
        paddingLeft: 16
    },
    containerStyle: {
        // paddingHorizontal: 16,
        // paddingTop: 20,
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
    sectionHeaderView: {
        width: '100%',
        height: 36,
        backgroundColor: '#DDDDDD',
        justifyContent: 'center',
        paddingLeft: 16
    },
    sectionHeaderTxt: {
        width: '100%',
        fontSize: 20,
        color: '#333333',
        fontWeight: 'bold'
    },
    separator: {
        width: '100%',
        height: 2,
        backgroundColor: '#D0D0D0'
    },
})