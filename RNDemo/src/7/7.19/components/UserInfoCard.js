import React, { useState } from "react";
import { Image, ImageBackground, Modal, SectionList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import default_avatar from "../assets/images/default_avatar.png";
import icon_add from "../assets/images/icon_add.png";
import icon_code from "../assets/images/icon_code.png";
import icon_male from "../assets/images/icon_male.png";
import icon_setting from "../assets/images/icon_setting.png";
import icon_close_modal from "../assets/images/icon_close_modal.png";

import { SectionData } from "../constants/Data";

export default (props) => {

    const { userInfo } = props;

    const [visible, setVisible] = useState(null);

    const showModal = (modalType) => {
        setVisible(modalType);
    };

    const hideModal = () => {
        setVisible(null);
    };

    const avatar = () => {
        return (
            <View style={styles.avatar}>
                <View style={styles.avatarImageView}>
                    <Image style={styles.avatarImage} source={default_avatar} />
                    <Image style={styles.addImage} source={icon_add} />
                </View>
                <View style={styles.txtView}>
                    <Text style={styles.userNameTxt}>{userInfo.userName}</Text>
                    <View style={styles.userNumberView}>
                        <Text style={styles.userNamberTxt}>小红书号: </Text>
                        <Text style={styles.userNamberTxt}>{userInfo.userNumber} </Text>
                        <Image style={styles.codeImage} source={icon_code} />
                    </View>
                </View>
            </View>
        );
    };

    const dataItem = (number, desc, disabled, callback) => {
        return (
            <TouchableOpacity 
                style={styles.dataItemTouchableOpacity}
                onPress={callback}
                disabled={disabled}
            >
                <Text style={styles.dataItemNumberTxt}>{number}</Text>
                <Text style={styles.dataItemDescTxt}>{desc}</Text>
            </TouchableOpacity>
        );
    };

    const renderItem = ({ item, index, section}) => {
        return (
            <View style={styles.renderItemView}>
                <Text style={styles.renderItemTxt}>{item}</Text>
            </View>
        );
    };

    const ListHeader = ({ title }) => {
        return (
            <View style={styles.listHeaderView}>
                <Text style={styles.listHeaderTxt}>{title}</Text>
                <TouchableOpacity style={styles.closeButton} onPress={hideModal}>
                    <Image style={styles.closeButtonImage} source={icon_close_modal} />
                </TouchableOpacity>
            </View>
        );
    };

    const renderSectionHeader = ({ section }) => {
        return (
            <View style={styles.renderSectionHeaderView}>
                <Text style={styles.renderSectionHeaderTxt}>{section.type}</Text>
            </View>
        );
    };

    const sectionList = (title) => {
        return (
            <View>
                <View style={styles.blank} />
                <View style={styles.content}>
                    <SectionList 
                        style={styles.sectionList}
                        contentContainerStyle={styles.containerStyle}
                        sections={SectionData}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => {
                            return `${item}-${index}`;
                        }}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={() => {
                            return (
                                <ListHeader title={title} />
                            )
                        }}
                        renderSectionHeader={renderSectionHeader}
                        stickySectionHeadersEnabled={true}
                    />
                </View>
            </View>
        )    
    };

    const modal = (favourite, title) => {
        return (
            <Modal
                visible={favourite === visible}
                animationType='slide'
                transparent={true}
            >
                {sectionList(title)}
            </Modal>
        );
    };

    const userData = () => {
        return (
            <View style={styles.userDataView}>
                <View style={styles.leftView}>
                    {dataItem(userInfo.favouriteNumber, '关注', false, () => {
                        showModal('favourite');
                    })}
                    {dataItem(userInfo.fansNumber, '粉丝', false, () => {
                        showModal('fans');
                    })}
                    {dataItem(userInfo.zanNumber, '获赞与收藏', true)}
                </View>
                <View style={styles.rightView}>
                    <TouchableOpacity style={styles.editTouchableOpacity}>
                        <Text style={styles.editTxt}>
                            编辑资料
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingTouchableOpacity}>
                        <Image style={styles.settingImage} source={icon_setting} />
                    </TouchableOpacity>
                </View>
                {modal('favourite', '关注列表')}
                {modal('fans', '粉丝列表')}
            </View>
        );
    };

    return (
        <View style={styles.root}>
            {avatar()}
            <Text style={styles.descriptionTxt}>{userInfo.description}</Text>
            <ImageBackground style={styles.sexImageBackground} imageStyle={styles.sexImage} source={icon_male} />
            {userData()}
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        paddingHorizontal: 15
    },
    avatar: {
        width: '100%',
        height: 130,
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatarImageView: {
        width: 100,
        height: 100,
    },
    avatarImage: {
        width: 100,
        height: 100,
        overflow: 'hidden',
        borderRadius: 50
    },
    addImage: {
        width: 25,
        height: 25,
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    txtView: {
        flex: 1,
        height: 100,
        paddingHorizontal: 5
    },
    userNumberView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    userNameTxt: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 15
    },
    userNamberTxt: {
        fontSize: 15,
        color: 'white'
    },
    codeImage: {
        width: 15,
        height: 15,
        tintColor: 'white'
    },
    descriptionTxt: {
        fontSize: 20,
        color: 'white'
    },
    sexImageBackground: {
        width: 30,
        height: 20,
        backgroundColor: '#FFFFFF50',
        marginVertical: 10,
        borderRadius: 10
    },
    sexImage: {
        resizeMode: 'contain',
        padding: 3,
    },
    dataItemTouchableOpacity: {
        width: 'auto',
        flexDirection: 'column',
        alignItems: 'center',
        paddingRight: 15
    },
    dataItemNumberTxt: {
        fontSize: 18,
        color: 'white'
    },
    dataItemDescTxt: {
        fontSize: 15,
        color: 'white',
        fontWeight: 300
    },
    userDataView: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftView: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    rightView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    editTouchableOpacity: {
        width: 100,
        height: 40,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    editTxt: {
        fontSize: 15,
        color: 'white'
    },
    settingTouchableOpacity: {
        width: 60,
        height: 40,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    settingImage: {
        width: 30,
        height: 30,
        tintColor: 'white',
        resizeMode: 'contain',
    },
    blank: {
        width: '100%',
        height: '15%',
        backgroundColor: 'transparent',
    },
    content: {
        width: '100%',
        height: '85%',
        backgroundColor: '#F5F5F5',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    sectionList: {
        width: '100%',
        height: '100%'
    },
    containerStyle: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    renderItemView: {
        width: '100%',
        height: 40,
        justifyContent: 'center'
    },
    renderItemTxt: {
        fontSize: 15,
        color: '#333333',
        paddingLeft: 16
    },
    renderSectionHeaderView: {
        width: '100%',
        height: 40,
        backgroundColor: '#999999',
        justifyContent: 'center',
    },
    renderSectionHeaderTxt: {
        fontSize: 15,
        marginLeft: 16
    },
    listHeaderView: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    listHeaderTxt: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    closeButton: {
        height: 20,
        width: 20,
        position: 'absolute',
        right: 16
    },
    closeButtonImage: {
        height: 20,
        width: 20
    }
});