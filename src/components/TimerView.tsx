import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
});
const TimerView = function (): React.JSX.Element {
  const [count, setTime] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>();
  // useEffect(() => {
  //   timerRef.current = setInterval(() => {
  //     setTime(v => {
  //       return v + 1;
  //     });
  //   }, 1000);
  //   return () => clearInterval(timerRef.current!);
  // }, []);
  return (<View >
    <Text style={styles.titleText}>{count}</Text>
  </View>);
};

export default TimerView;
