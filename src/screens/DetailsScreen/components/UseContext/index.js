/*
 * @Author: zhangcx01
 * @Date: 2020-07-30 17:46:22
 * @LastEditTime: 2020-08-04 11:58:14
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /hooksdemo/src/screens/DetailsScreen/components/UseState.js
 */
import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import ClassContext1 from './ClassContext1';
import ClassContext from './ClassContext';
import HooksUseContext from './HooksUseContext';

export default class UseContext extends PureComponent {
  render() {
    return (
      <View>
        <Text> UseContext </Text>
        <ClassContext />
        <ClassContext1 />
        <HooksUseContext />
      </View>
    );
  }
}
