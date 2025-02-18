# StyleSheet 构建灵活样式表
* 基础使用
* 创建多个样式表
* 样式合并: StyleSheet.compose 和 [] 写法的区别（性能会比 [] 高）
* 样式平铺: StyleSheet.flatten（如果有重复的，会用后面的覆盖前面的）
* 绝对填充: StyleSheet.absoluteFill（{ "position": "absolute", "left": 0, "right": 0, "top": 0, "bottom": 0 }）
* 头发丝尺寸: StyleSheet.hairlineWidth（一个像素的宽度）