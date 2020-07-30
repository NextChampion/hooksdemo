/*
 * @Author: zhangcx01
 * @Date: 2020-07-30 17:17:19
 * @LastEditTime: 2020-07-30 17:21:35
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /hooksdemo/src/navigator/index.js
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './stack';

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
