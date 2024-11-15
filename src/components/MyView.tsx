import React, {useEffect, useRef} from 'react';
import {View, UIManager, findNodeHandle, StyleSheet} from 'react-native';
import {MyViewManager} from './MyViewManager';
const styles = StyleSheet.create({
  viewBox: {
    width: '100%',
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const createFragment = (viewId: number) =>
  UIManager.dispatchViewManagerCommand(
    viewId,
    // we are calling the 'create' command
    UIManager.getViewManagerConfig(
      'DemoViewManager',
    ).Commands.create.toString(),
    [viewId],
  );

export const MyView = () => {
  const ref = useRef(null);

  useEffect(() => {
    const viewId = findNodeHandle(ref.current);
    console.log('viewId', viewId);
    createFragment(viewId!);
  }, []);

  return (
    <View style={styles.viewBox}>
      <MyViewManager style={{height: 100, width: 500}} ref={ref} />
    </View>
  );
};
