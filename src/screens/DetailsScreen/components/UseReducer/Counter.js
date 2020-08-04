/*
 * @Author: zhangcx01
 * @Date: 2020-08-04 13:57:32
 * @LastEditTime: 2020-08-04 14:16:05
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 */
import React, {useReducer} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import counter, {increase, decrease, init, reset} from './counter.redux';

export default function Counter({initialCount}) {
  const [state, dispatch] = useReducer(counter, initialCount, init);
  return (
    <View>
      <Text>Counter</Text>
      <View style={styles.container}>
        <Button onPress={() => dispatch(increase())} title="+" />
        <Text>Count: {state.count}</Text>
        <Button onPress={() => dispatch(decrease())} title="-" />
        <Button onPress={() => dispatch(reset(initialCount))} title="reset" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
