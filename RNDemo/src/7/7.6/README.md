# TextInput
* 字体样式: 和 Text 一致
* 自动聚焦: autoFocus 和 focus()
* 自动失焦: blurOnSubmit 和 blur()
* 隐藏光标: caretHidden
* 默认输入: defaultValue
* 可编辑性: editable
* 键盘类型: keyboardType

    * default 默认键盘
    * numb-pad 数字键盘
    * decimal-pad 数字键盘
    * numeric 数字键盘
    * email-address 邮箱键盘
    * phone-pad 拨号键盘

* 确定键配置: returnKeyType

    * done 
    * go
    * next 
    * search
    * send

* 最大长度: maxLength
* 多行输入: multiline 和 numberOfLines (多行 和 显示多少行)
* 焦点回调: onBlur 和 onFocus
* 内容回调: onChange 和 onChangeText
* 选中相关: selection、selectionColor、selectTextOnFocus（选中的索引范围、选中区域的颜色、在聚焦时自动选中）
* 对齐方式: textAlign 和 textAlignVertical（iOS中不支持 textAlignVertical，可以用 View 包一层，justifyContent 垂直居中、alignItems 水平居中）
* 安全模式: secureTxtEntry（不能和 multiline 一起用）