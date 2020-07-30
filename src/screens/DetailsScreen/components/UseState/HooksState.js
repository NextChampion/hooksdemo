/*
 * @Author: zhangcx01
 * @Date: 2020-07-30 18:19:46
 * @LastEditTime: 2020-07-30 18:32:52
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /hooksdemo/src/screens/DetailsScreen/components/UseState/HooksState.js
 */
import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function HooksState() {
  const [num, setNum] = useState(0);

  const increase = () => {
    setNum(num + 1);
  };

  const decrease = () => {
    setNum(num - 1);
  };

  return (
    <View style={styles.container}>
      <Text> useState 函数组件</Text>
      <View style={styles.content}>
        <Button title="增加" onPress={increase} />
        <Text> 数量:{num} </Text>
        <Button title="减少" onPress={decrease} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  content: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
