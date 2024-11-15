package com.awesomeproject.view

import android.view.LayoutInflater
import android.view.View
import android.widget.ImageView
import android.widget.TextView
import com.awesomeproject.R
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.awesomeproject.view.LinearView
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.annotations.ReactProp

class LinearViewManager() : SimpleViewManager<View>() {

    override fun getName(): String {
            return "NativeInfoViewManager"
    }

    override fun createViewInstance(reactContext: ThemedReactContext): View {
        val inflater = LayoutInflater.from(reactContext)
        return inflater.inflate(R.layout.result_profile, null)
    }

    @ReactProp(name = "avatar")
    fun setAvatar(view: View, avatarUrl: String) {
        // 这里可以根据 URL 设置 ImageView 的图片，这里仅做示例不实际处理
        val imageView = view.findViewById<ImageView>(R.id.img_avatar)
        // 实际应用中可以使用 Glide 或 Picasso 加载图片
        // Glide.with(imageView.context).load(avatarUrl).into(imageView)
    }

    @ReactProp(name = "name")
    fun setName(view: View, name: String) {
        (view.findViewById<TextView>(R.id.txt_name)).text = name
    }

    @ReactProp(name = "description")
    fun setDescription(view: View, description: String) {
        (view.findViewById<TextView>(R.id.txt_desc)).text = description
    }
}