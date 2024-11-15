package com.awesomeproject.view

import android.view.LayoutInflater
import android.view.View
import android.widget.ImageView
import android.widget.TextView
import androidx.annotation.NonNull
import androidx.annotation.Nullable
import com.awesomeproject.R
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.awesomeproject.view.LinearView
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.common.MapBuilder
import com.facebook.react.uimanager.annotations.ReactProp

class LinearViewManager() : SimpleViewManager<LinearView>() {

    override fun getName(): String {
        return "NativeInfoViewManager"
    }

    override fun createViewInstance(reactContext: ThemedReactContext): LinearView {
        return LinearView(reactContext)
    }

    @ReactProp(name = "avatar")
    fun setAvatar(view: LinearView, url: String) {
        view.setAvatar(url)
    }

    @ReactProp(name = "name")
    fun setName(view: LinearView, name: String) {
        view.setName(name)
    }

    @ReactProp(name = "description")
    fun setDesc(view: LinearView, desc: String) {
      view.setDescription(desc);
    }

    override fun getExportedCustomBubblingEventTypeConstants(): Map<String, Any>? {
        return MapBuilder.builder<String, Any>()
            .put("onShapeChange", MapBuilder.of("phasedRegistrationNames", MapBuilder.of("bubbled", "onShapeChange")))
            .build()
    }

    override fun getCommandsMap(): Map<String, Int>? {
        return MapBuilder.of("setShape", SET_SHAPE_CODE)
    }

    override fun receiveCommand(
        view: LinearView,
        commandId: String,
        args: ReadableArray?
    ) {
        val command = commandId.toInt()
        if (command == SET_SHAPE_CODE) {
            if (args != null && args.size() > 0) {
                val shape = args.getString(0)
                view.setShape(shape!!)
            }
        } else {
            super.receiveCommand(view, commandId, args)
        }
    }

    companion object {
        const val SET_SHAPE_CODE = 100
    }
}
