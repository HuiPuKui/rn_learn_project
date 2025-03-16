import React, { useRef, useState } from "react";
import { 
    Animated, 
    Button, 
    Dimensions, 
    Modal, 
    SectionList, 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    Image
} from "react-native";

import icon_close_modal from "../assets/images/icon_close_modal.png"

import { SectionData } from "../constants/Data";

const { height: WINDOW_HEIGHT } = Dimensions.get('window');

export default () => {

    const [visible, setVisible] = useState(false);

    const marginTop = useRef(new Animated.Value(WINDOW_HEIGHT)).current;

    const showModal = () => {
        setVisible(true);
        Animated.timing(marginTop, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false,
        }).start();
    };

    const hideModal = () => {
        Animated.timing(marginTop, {
            toValue: WINDOW_HEIGHT,
            duration: 500,
            useNativeDriver: false,
        }).start(() => {
            setVisible(false);
        })
    };

    const renderItem = ({ item, index, section }) => {
        return (
            <View style={styles.view}>
                <Text style={styles.txt}>{item}</Text>
            </View>
        )
    }

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
            <Button title="按钮" onPress={() => { showModal(); }} />

            <Modal
                visible={visible}
                transparent={true}
                animationType="fade"
            >
                <View style={styles.container}>
                    <Animated.View
                        style={[styles.contentView, { marginTop: marginTop }]}
                    >
                        <SectionList
                            style={styles.sectionList}
                            contentContainerStyle={styles.containerStyle}
                            sections={SectionData}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => `${item}-${index}`}
                            showsVerticalScrollIndicator={true}
                            ListHeaderComponent={ListHeader}
                            ListFooterComponent={ListFooter}
                            renderSectionHeader={renderSectionHeader}
                            ItemSeparatorComponent={() => {
                                return (
                                    <View style={styles.separator} />
                                )
                            }}
                            stickySectionHeadersEnabled={true}
                        />
                    </Animated.View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 16,
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#00000060',
    },
    contentView: {
        width: '100%',
        height: '100%',
        paddingTop: '30%',
    },
    sectionList: {
        width: '100%',
        height: '80%',
    },
    containerStyle: {
        backgroundColor: '#F5F5F5',
    },
    txt: {
        width: '100%',
        fontSize: 20,
        color: '#333333',
        paddingLeft: 16,
    },
    view: {
        width: '100%',
        height: 56,
        justifyContent: 'center',
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
    closeButton: {
        width: 24,
        height: 24,
        position: 'absolute',
        right: 16
    },
    closeImage: {
        width: 24,
        height: 24
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