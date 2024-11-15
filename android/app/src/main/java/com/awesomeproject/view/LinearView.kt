package com.awesomeproject.view

import android.content.Context
import android.util.AttributeSet
import android.view.LayoutInflater
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.TextView
import androidx.annotation.Nullable
import com.awesomeproject.R
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactContext
import com.facebook.react.uimanager.events.RCTEventEmitter

class LinearView @JvmOverloads constructor(
    context: Context,
    @Nullable attrs: AttributeSet? = null,
    defStyleAttr: Int = 0
) : LinearLayout(context, attrs, defStyleAttr) {
    private val avatarImageView: ImageView
    private val nameTextView: TextView
    private val descTextView: TextView
    init {
        LayoutInflater.from(context).inflate(R.layout.result_profile, this, true)
        avatarImageView = findViewById(R.id.img_avatar)
        nameTextView = findViewById(R.id.txt_name)
        descTextView = findViewById(R.id.txt_desc)
    }
    fun setAvatar(avatarUrl: String) {
        // 这里可以根据 URL 设置 ImageView 的图片，这里仅做示例不实际处理
        // 实际应用中可以使用 Glide 或 Picasso 加载图片
        // Glide.with(avatarImageView.context).load(avatarUrl).into(avatarImageView)
    }

    fun setName(name: String) {
        nameTextView.text = name
    }

    fun setDescription(description: String) {
        descTextView.text = description
    }
}