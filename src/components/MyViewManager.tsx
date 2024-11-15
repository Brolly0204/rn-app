import {requireNativeComponent, ViewProps} from 'react-native';

interface MyViewManagerProps extends ViewProps {
  // 可以添加其他特定的属性
 
}

export const MyViewManager = requireNativeComponent<MyViewManagerProps>('DemoViewManager');
