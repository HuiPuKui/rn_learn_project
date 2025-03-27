import React, { forwardRef, use, useImperativeHandle, useLayoutEffect, useState } from "react";
import { Image, KeyboardAvoidingView, Modal, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { getUUID } from "../utils/UUID";
import { load, save } from "../utils/Storage";

import icon_close_modal from '../assets/icon_close_modal.png';

export default forwardRef((props, ref) => {

    const [visible, setVisible] = useState(false)

    const [id, setId] = useState('');

    const [type, setType] = useState('游戏');

    const [name, setName] = useState('');

    const [account, setAccount] = useState('');

    const [password, setPassword] = useState('');

    const show = () => {
        setVisible(true);

        setId(getUUID());
    }

    const hide = () => {
        setVisible(false);
    }

    useImperativeHandle(ref, () => {
        return {
            show: show,
            hide: hide,
        }
    });

    const onSavePress = () => {
        const newAccount = { id, type, name, account, password };
        load('accountList').then((data) => {
            let accountList = data ? JSON.parse(data) : [];
            accountList.push(newAccount);
            save('accountList', JSON.stringify(accountList)).then(() => {
                hide();
            });
        });
    }

    const renderTitle = () => {

        const styles = StyleSheet.create({
            titleLayout: {
                width: '100%',
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
            },
            titleTxt: {
                fontSize: 18,
                color: '#333333',
                fontWeight: 'bold',
            },
            closeButton: {
                position: 'absolute',
                right: 6
            },
            closeImg: {
                width: 28,
                height: 28,
                resizeMode: 'contain',
            },
        });

        return (
            <View style={styles.titleLayout}>
                <Text style={styles.titleTxt}>添加账号</Text>
                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => {
                        hide();
                    }}
                >
                    <Image style={styles.closeImg} source={icon_close_modal} />
                </TouchableOpacity>
            </View>
        )
    }

    const renderType = () => {

        const styles = StyleSheet.create({
            typesLayout: {
                width: '100%',
                height: 32,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 8,
            },
            tab: {
                flex: 1,
                height: '100%',
                borderWidth: 1,
                borderColor: '#C0C0C0',
                justifyContent: 'center',
                alignItems: 'center',
            },
            leftTab: {
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
            },
            rightTab: {
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
            },
            moveLet1Pix: {
                marginLeft: -1,
            },
            tabTxt: {
                fontSize: 14,
            }
        });

        const typesArray = ['游戏', '平台', '银行卡', '其它'];

        return (
            <View style={styles.typesLayout}>
                { typesArray.map((item, index) => {
                    return (
                        <TouchableOpacity
                            style={[
                                styles.tab,
                                index === 0 
                                    ? styles.leftTab 
                                    : index === 3 
                                        ? styles.rightTab 
                                        : {},
                                index > 0 && styles.moveLet1Pix,
                                { backgroundColor: type === item ? '#3050FF' : 'transparent' }
                            ]}
                            key={`${item}`}
                            onPress={() => {
                                setType(item);
                            }}
                        >
                            <Text style={[
                                styles.tabTxt,
                                { color: type === item ? 'white' : '#666666' }
                            ]}>{item}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }

    const renderName = () => {

        const styles = StyleSheet.create({
            input: {
                width: '100%',
                height: 40,
                backgroundColor: '#F0F0F0',
                marginTop: 8,
                borderRadius: 8,
                paddingHorizontal: 12,
                fontSize: 16,
                color: '#333333',
            }
        })

        return (
            <TextInput 
                style={styles.input}
                maxLength={20}
                value={name}
                onChangeText={(text) => {
                    setName(text || '');
                }}
            />
        );
    }

    const renderAccount = () => {

        const styles = StyleSheet.create({
            input: {
                width: '100%',
                height: 40,
                backgroundColor: '#F0F0F0',
                marginTop: 8,
                borderRadius: 8,
                paddingHorizontal: 12,
                fontSize: 16,
                color: '#333333',
            }
        })

        return (
            <TextInput 
                style={styles.input}
                maxLength={20}
                value={account}
                onChangeText={(text) => {
                    setAccount(text || '');
                }}
            />
        );
    }

    const renderPassword = () => {

        const styles = StyleSheet.create({
            input: {
                width: '100%',
                height: 40,
                backgroundColor: '#F0F0F0',
                marginTop: 8,
                borderRadius: 8,
                paddingHorizontal: 12,
                fontSize: 16,
                color: '#333333',
            }
        })

        return (
            <TextInput 
                style={styles.input}
                maxLength={20}
                value={password}
                onChangeText={(text) => {
                    setPassword(text || '');
                }}
            />
        );
    }

    const renderButton = () => {

        const styles= StyleSheet.create({
            saveButton: {
                width: '100%',
                height: 44,
                backgroundColor: '#3050FF',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                borderRadius: 8,
                marginBottom: 6,
            },
            saveTxt: {
                fontSize: 16,
                color: 'white',
                fontWeight: 'bold',
            },
        });

        return (
            <TouchableOpacity
                style={styles.saveButton}
                onPress={onSavePress}
            >
                <Text style={styles.saveTxt}>保 存</Text>
            </TouchableOpacity>
        );
    }

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType='fade'
        >
            <KeyboardAvoidingView 
                style={styles.root}
                behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
            >
                <View style={styles.content}>
                    { renderTitle() }
                    <Text style={styles.subTitleTxt}>账号类型</Text>
                    { renderType() }
                    <Text style={styles.subTitleTxt}>账号名称</Text>
                    { renderName() }
                    <Text style={styles.subTitleTxt}>账号</Text>
                    { renderAccount() }
                    <Text style={styles.subTitleTxt}>密码</Text>
                    { renderPassword() }

                    { renderButton() }
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
})

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#00000060',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12
    },
    subTitleTxt: {
        fontSize: 12,
        color: '#666666',
        marginTop: 16,
    }
});