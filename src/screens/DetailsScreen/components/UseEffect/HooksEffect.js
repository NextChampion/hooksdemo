/*
 * @Author: zhangcx01
 * @Date: 2020-07-30 19:20:00
 * @LastEditTime: 2020-07-30 19:33:04
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /hooksdemo/src/screens/DetailsScreen/components/UseEffect/HooksEffect.js
 */
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function HooksEffect(params) {
  const [visiable, setVisiable] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisiable(true);
    }, 2000);
    return () => {
      timer && clearTimeout(timer);
    };
  }, [visiable]);

  return (
    <View style={styles.container}>
      <Text> visiable:{visiable} </Text>
      {visiable ? <Text>ssss</Text> : null}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
