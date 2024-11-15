package com.awesomeproject.view

import android.content.Context
import android.os.Handler
import android.os.Looper
import android.util.AttributeSet
import android.view.LayoutInflater
import android.view.View
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.TextView
import androidx.annotation.Nullable
import com.awesomeproject.R
import com.bumptech.glide.Glide
import com.bumptech.glide.load.resource.bitmap.CircleCrop
import com.bumptech.glide.load.resource.bitmap.RoundedCorners
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.WritableMap
import com.facebook.react.modules.core.DeviceEventManagerModule


class LinearView @JvmOverloads constructor(
    context: Context,
    @Nullable attrs: AttributeSet? = null,
    defStyleAttr: Int = 0
) : LinearLayout(context, attrs, defStyleAttr), View.OnClickListener {
    private lateinit var avatarImg: ImageView
    private lateinit var nameTxt: TextView
    private lateinit var descTxt: TextView
    private lateinit var changeButton: TextView

    private var url: String = ""
    private var shape: String = "circle" // circle、round

    init {
        initView();
    }

    private fun initView() {
        val inflater = LayoutInflater.from(context)
        val view = inflater.inflate(R.layout.result_profile, this, true)
        avatarImg = view.findViewById(R.id.img_avatar)
        nameTxt = view.findViewById(R.id.txt_name)
        descTxt = view.findViewById(R.id.txt_desc)
        changeButton = view.findViewById(R.id.changeButton)
        changeButton.setOnClickListener(this)
    }

    override fun onClick(v: View) {
        shape = if (shape == "circle") "round" else "circle"
        Glide.with(this)
            .load(url)
            .placeholder(R.drawable.icon_avatar)
            .transform(if (shape == "circle") CircleCrop() else RoundedCorners(40))
            .into(avatarImg)

//        val params = Arguments.createMap()
//        params.putString("shape", shape)
//        println(shape);
//        sendEvent("onShapeChange", params)
        Handler(Looper.getMainLooper()).postDelayed({
            val params = Arguments.createMap()
            params.putString("shape", shape)
            sendEvent("onShapeChange", params)
        }, 100) // 延迟 100 毫秒
    }

    private fun sendEvent(eventName: String, params: WritableMap) {
        try {
            val reactContext = context as ReactContext
            reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                .emit(eventName, params)
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }


    fun setAvatar(url: String) {
        this.url = url
        Glide.with(this)
            .load(url)
            .placeholder(R.drawable.icon_avatar)
            .transform(CircleCrop())
            .into(avatarImg)
    }

    fun setShape(shape: String) {
        this.shape = shape
        Glide.with(this)
            .load(url)
            .placeholder(R.drawable.icon_avatar)
            .transform(if (shape == "circle") CircleCrop() else RoundedCorners(40))
            .into(avatarImg)
    }
    fun setName(name: String) {
        nameTxt.text = name
    }

    fun setDescription(description: String) {
        descTxt.text = description
    }
}