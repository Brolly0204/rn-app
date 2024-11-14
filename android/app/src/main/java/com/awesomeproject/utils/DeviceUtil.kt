package com.awesomeproject.utils
import android.app.Activity
import android.content.Intent

object DeviceUtil {
    // 打开图库
    fun openGallery(activity: Activity?) {
        // 开启Pictures画面，Type设定为image
        val intent = Intent()
        intent.type = "image/*"
        // 使用Intent.ACTION_GET_CONTENT这个Action
        intent.action = Intent.ACTION_GET_CONTENT
        // 取得相片后返回本画面
        activity?.startActivityForResult(intent, 1)
    }
}