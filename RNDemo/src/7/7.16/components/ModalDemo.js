import React, { useState } from "react";
import { View, Modal, StyleSheet, useColorScheme, SafeAreaView, StatusBar, Text, SectionList, Button, Touchable, TouchableOpacity, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { SectionData } from "../constants/Data";
import icon_close_modal from "../assets/images/icon_close_modal.png";

export default () => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const hideModal = () => {
        setVisible(false);
    };

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
            <TouchableOpacity style={styles.closeButton} onPress={() => { hideModal(); }}>
                <Image style={styles.closeImage} source={icon_close_modal} />
            </TouchableOpacity>
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

    return (
        <View style={styles.root}>
            <Button title="按钮" onPress={() => {
                showModal();
            }} />

            <Modal 
                visible={visible}
                onRequestClose={() => hideModal() }
                transparent={true}
                statusBarTranslucent={true}
                animationType='slide'
                onShow={() => {
                    console.log(`onShow...`);
                }}
                onDismiss={() => {
                    console.log(`onDismiss...`);
                }}
            >
                <SafeAreaView style={backgroundStyle} >
                    <StatusBar
                        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                        backgroundColor={backgroundStyle.backgroundColor}
                    />
                    <View style={styles.blank} />
                    <View style={styles.content}>
                        <SectionList 
                            style={styles.sectionList}
                            sections={SectionData}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => {
                                return `${item}-${index}`;
                            }}
                            contentContainerStyle={styles.containerStyle}
                            showsVerticalScrollIndicator={true}
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
                    </View>
                </SafeAreaView>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 16
    },
    blank: {
        width: '100%',
        height: '10%',
        backgroundColor: '#00000050'
    },
    content: {
        width: '100%',
        height: '90%',
        backgroundColor: '#FF000030'
    },
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
        backgroundColor: 'white',
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
    closeButton: {
        width: 24,
        height: 24,
        position: 'absolute',
        right: 16
    },
    closeImage: {
        width: 24,
        height: 24
    }
});