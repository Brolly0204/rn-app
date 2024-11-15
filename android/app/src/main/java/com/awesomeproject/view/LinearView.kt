package com.awesomeproject.view

import android.content.Context
import android.util.AttributeSet
import android.view.LayoutInflater
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

    init {
        val inflater = LayoutInflater.from(context)
        val view = inflater.inflate(R.layout.result_profile, this, true)
        // 在这里可以进一步设置组件的其他属性，比如设置文本、颜色等
        // 例如：
        // findViewById<TextView>(R.id.some_text_view).text = "Hello from Custom UI Component"
        // 在这里可以获取布局文件中的各个视图元素并进行初始化操作
        val textView1 = findViewById<TextView>(R.id.txt_name)
        val textView2 = findViewById<TextView>(R.id.txt_desc)
        // 根据需要设置文本视图的初始文本内容等属性
        textView1.text = "Initial Text 1"
        textView2.text = "Initial Text 2"
//        addView(view, lp)
    }
}