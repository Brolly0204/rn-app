//package com.awesomeproject.view
//
//import com.facebook.drawee.backends.pipeline.Fresco
//import com.facebook.react.bridge.ReactApplicationContext
//import com.facebook.react.uimanager.SimpleViewManager
//import com.facebook.react.uimanager.ThemedReactContext
//
//class ResultProfileManager(
//    private val callerContext: ReactApplicationContext
//) : SimpleViewManager<ResultProfileView>() {
//
//    override fun getName() = REACT_CLASS
//
//    companion object {
//        const val REACT_CLASS = "RCTProfileView"
//    }
//
//    override fun createViewInstance(context: ThemedReactContext) =
//        ResultProfileView(context, Fresco.newDraweeControllerBuilder(), null, callerContext)
//}
