import React from "react";
import { Alert, Button, Text, View } from "react-native";

export default () => {

    return (
        <View>
            <Button 
                title="按钮"
                onPress={() => {
                    // alert('这是一条提示信息');
                    // alert(123);
                    // alert(false);

                    // const buttons = [
                    //     { text: '取消', onPress: () => { console.log('取消')} },
                    //     { text: '确定', onPress: () => { console.log('确定')} }
                    // ];
                    // Alert.alert('这是标题', '这是一条提示信息', buttons);

                    // console.log('这是普通的日志输出');

                    // console.info('信息日志输出');
                    // console.debug('调试日志输出');
                    // console.warn('警告日志输出');
                    // console.error('错误日志输出');

                    // const name = '张三';
                    // console.log('我的名字叫%s', name);
                    // console.log('我的名字叫%s', '张三');
                    // console.log('我是个人开发者%s，我学习RN%d年半了', '张三', 2);
                    // const obj = { name: '张三', age: 12 };
                    // console.log('我是一个对象: %o', obj);

                    // console.log('%c这行日志红色文字，字号大', 'color: red; font-size: x-large');
                    // console.log('%c这行日志蓝色文字，字号中', 'color: blue; font-size: x-medium');
                    // console.log('%c这行日志绿色文字，字号小', 'color: green; font-size: x-small');

                    // const viewLayout = (
                    //    <View style={{ flexDirection: 'column' }} >
                    //         <Text style={{ fontSize: 20, color: 'red' }} >文字显示</Text>
                    //    </View>
                    // );
                    // console.log(viewLayout);

                    // const users = [
                    //     { name: '张三', age: 12, hobby: '唱歌' },
                    //     { name: '李四', age: 12, hobby: '跳舞' },
                    //     { name: '王五', age: 12, hobby: '打篮球' }
                    // ];
                    // console.table(users);

                    console.group();
                    console.log('第1行日志')
                    console.log('第2行日志')
                    console.log('第3行日志')
                        console.group();
                        console.log('二级分组第1行日志')
                        console.log('二级分组第2行日志')
                        console.log('二级分组第3行日志')
                        console.groupEnd();
                    console.groupEnd();
                }}
            />
        </View>
    );
}