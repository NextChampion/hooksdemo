/*
 * @Author: zhangcx01
 * @Date: 2020-07-30 19:20:00
 * @LastEditTime: 2020-08-04 11:27:28
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /hooksdemo/src/screens/DetailsScreen/components/UseEffect/HooksEffect1.js
 */
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function HooksEffect1(params) {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setNum(num + 1);
    }, 1000);
    return () => {
      timer && clearInterval(timer);
    };
  }, [num]);

  return (
    <View style={styles.container}>
      <Text>有问题的 数字:{num} </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});
