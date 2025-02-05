# ScrollView
* 添加子节点: 固定子元素、列表渲染、数组渲染
* 内容包裹样式: contentContainerStyle
* 滚动键盘消失: keyboardDismissMode
* 点击收起键盘: keyboardShouldPersistTaps
* 滚动开始与结束: onMomentumScrollBegin、onMomentumScrollEnd
* 滚动距离监听: onScroll（iOS: scrollEventThrottle 指定多少毫秒回调一次）
* 超出滚动: overScrollMode（在 iOS 上，该属性不会生效，但你可以使用 bounces={false} 来达到类似的效果（禁止回弹）。）
* 分页滚动: pagingEnabled
* 滚动方向: horzontal
* 滚动开关: scrollEnable
* 初始滚动: contentOffset
* 是否展示滚动条: showsVerticalScrollIndicator/showsHorizontalScrllIndicator
* 吸顶元素: stickyHeaderIndices
* api: scrollTo()、scrollToEnd()