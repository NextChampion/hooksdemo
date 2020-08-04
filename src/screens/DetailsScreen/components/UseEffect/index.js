/*
 * @Author: zhangcx01
 * @Date: 2020-07-30 17:46:22
 * @LastEditTime: 2020-08-04 11:16:15
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /hooksdemo/src/screens/DetailsScreen/components/UseEffect/index.js
 */
import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import ClassEffect from './ClassEffect';
import HooksEffect from './HooksEffect';
import HooksEffect1 from './HooksEffect1';
import HooksEffect11 from './HooksEffect11';
export default class UseEffect extends PureComponent {
  render() {
    return (
      <View>
        <ClassEffect />
        <HooksEffect />
        <HooksEffect1 />
        <HooksEffect11 />
      </View>
    );
  }
}
