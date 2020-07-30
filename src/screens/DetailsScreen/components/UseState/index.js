/*
 * @Author: zhangcx01
 * @Date: 2020-07-30 17:46:22
 * @LastEditTime: 2020-07-30 18:32:23
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /hooksdemo/src/screens/DetailsScreen/components/UseState/index.js
 */
import React, {PureComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import ClassState from './ClassState';
import HooksState from './HooksState';

export default class UseState extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <ClassState />
        <HooksState />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100,
  },
});
