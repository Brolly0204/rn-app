import com.awesomeproject.rn.NativeMethodsModule
import com.awesomeproject.view.DemoViewManager
import com.awesomeproject.view.LinearViewManager
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager
import java.util.Arrays

class NativeMethodsModulePackage : ReactPackage {
    override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
        return Arrays.asList(NativeMethodsModule(reactContext))
    }

    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
//        return emptyList()
        return listOf(DemoViewManager(reactContext), LinearViewManager())
    }
}
