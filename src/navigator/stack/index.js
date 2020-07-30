/*
 * @Author: zhangcx01
 * @Date: 2020-07-30 17:18:22
 * @LastEditTime: 2020-07-30 17:21:20
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /hooksdemo/src/navigator/stack/index.js
 */
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
