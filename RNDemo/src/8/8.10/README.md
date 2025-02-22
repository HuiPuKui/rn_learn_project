# Vibration: 简单好用的震动效果
* 原生申明权限: android.permission.VIBRATE（iOS 不需要，他只是播放震动声音）
* 发起震动: Vibration.vibrate()
* 安卓时间模式: [100, 500, 200, 500] （在 Android 上，数组中的奇数索引表示振动持续时间，而偶数索引表示间隔时间）
* iOS 时间模式: [100, 200, 300, 400]）（在 iOS 上，数组中的数字表示间隔时间，因为振动持续时间是固定的）
* 重复震动: repeat