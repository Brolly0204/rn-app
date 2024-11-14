package com.awesomeproject

import com.awesomeproject.utils.DeviceUtil
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class NativeMethodsModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "NativeMethodsModule"
    }

    // 定义原生方法，这里以一个简单的打印消息的方法为例
    @ReactMethod
    fun printMessage(message: String, promise: Promise) {
        println("Native method received message: $message")
        promise.resolve("printMessage");
    }

    // 可以添加更多不同功能的原生方法，如进行网络请求、操作本地文件等
    @ReactMethod
    fun performSomeNativeTask(promise: Promise) {
        // 这里可以添加具体的原生任务逻辑，比如读取本地文件内容等
        println("Performing some native task...")
        promise.resolve("performSomeNativeTask");
    }
    @ReactMethod
    fun openGallery() {
        if (currentActivity == null) {
            return;
        }
        DeviceUtil.openGallery(currentActivity);
    }
}