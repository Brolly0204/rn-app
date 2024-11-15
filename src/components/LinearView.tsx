
import React, {useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  requireNativeComponent,
  ViewProps,
  findNodeHandle,
  UIManager,
} from 'react-native';

type NativeInfoViewType =
  | ViewProps
  | {
      // 这部分是自定义的属性
      avatar: string;
      name: string;
      description: string;
      onShapeChange: (e: any) => void;
    };

const NativeInfoView = requireNativeComponent<NativeInfoViewType>(
  'NativeInfoViewManager',
);

  export default () => {
    const ref = useRef(null);

    useEffect(() => {
      // setTimeout(() => {
      //   sendCommand('setShape', ['round']);
      // }, 3000);
          const viewId = findNodeHandle(ref.current);
    console.log('viewId123', viewId);
    createFragment(viewId!);
    }, []);

    const createFragment = (viewId: number) =>{
      // UIManager.dispatchViewManagerCommand(
      //   viewId,
      //   // we are calling the 'create' command
      //   UIManager.getViewManagerConfig(
      //     'NativeInfoViewManager',
      //   ).Commands.create.toString(),
      //   [viewId],
      // );
    }
    const sendCommand = (command: string, params: any[]) => {
      const viewId = findNodeHandle(ref.current);
      // @ts-ignore
      const commands = UIManager.getViewManagerConfig(
        'NativeInfoViewManager',
      ).Commands[command].toString();
      UIManager.dispatchViewManagerCommand(viewId, commands, params);
    };


    return (
      <View style={{flex: 1}}>
        <NativeInfoView
          style={{flex: 1}}
          avatar="https://example.com/avatar.png"
          name="卡卡罗特"
          description="《龙珠Z：卡卡罗特》是CyberConnect2开发，万代南梦宫发行的一款角色扮演类游戏，在游戏中玩家可体验到孙悟空及其他..."
        />
     </View>
    );
  };

  const styles = StyleSheet.create({
    viewBox: {
      width: '100%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
