import React, {useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  requireNativeComponent,
  ViewProps,
  findNodeHandle,
  UIManager,
  DeviceEventEmitter,
} from 'react-native';

type NativeInfoViewType =
  | ViewProps
  | {
      // 这部分是自定义的属性
      avatar: string;
      name: string;
      description: string;
      onShapeChange?: (e: any) => void;
    };

const NativeInfoView = requireNativeComponent<NativeInfoViewType>(
  'NativeInfoViewManager',
);

export default () => {
  const ref = useRef(null);


   useEffect(() => {
     setTimeout(() => {
       sendCommand('setShape', ['round']);
     }, 3000);
   }, []);

   useEffect(() => {
     const subscription = DeviceEventEmitter.addListener('onShapeChange', (event) => {
      console.log('Received event:', event);
    });
    return () => subscription.remove();
   }, []);

       const sendCommand = (command: string, params: any[]) => {
         const viewId = findNodeHandle(ref.current);
         // @ts-ignore
         const commands = UIManager.getViewManagerConfig(
           'NativeInfoViewManager',
         ).Commands[command].toString();
         UIManager.dispatchViewManagerCommand(viewId, commands, params);
       };
   
  const avatarUri =
    'https://upload.jianshu.io/users/upload_avatars/19435884/5c30151f-7756-4071-843e-6ee1c755a031.png?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240';

  return (
    <View style={styles.container}>
      <NativeInfoView
      ref={ref}
        style={styles.viewBox}
        avatar={avatarUri}
        name="卡卡罗特"
        description="《龙珠Z：卡卡罗特》是CyberConnect2开发，万代南梦宫发行的一款角色扮演类游戏，在游戏中..."

      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingHorizontal: 10,
  },
  viewBox: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'red'
  },
});
function sendCommand(arg0: string, arg1: string[]) {
  throw new Error('Function not implemented.');
}

