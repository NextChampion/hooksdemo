/*
 * @Author: zhangcx01
 * @Date: 2020-07-30 17:54:55
 * @LastEditTime: 2020-07-30 18:14:17
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /hooksdemo/src/screens/DetailsScreen/index.js
 */
import React from 'react';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';
import UseContext from './components/UseContext';
import UseReducer from './components/UseReducer';
import UseCallBack from './components/UseCallBack';
import UseMemo from './components/UseMemo';
import UseRef from './components/UseRef';
import UseImperativeHandle from './components/UseImperativeHandle';
import UseLayoutEffect from './components/UseLayoutEffect';
import UseDebugValue from './components/UseDebugValue';

export default function DetailsScreen(props) {
  const {route} = props;
  const {params} = route || {};
  const {title} = params || {};
  const components = {
    UseState,
    UseEffect,
    UseContext,
    UseReducer,
    UseCallBack,
    UseMemo,
    UseRef,
    UseImperativeHandle,
    UseLayoutEffect,
    UseDebugValue,
  };
  const Cmp = components[title];
  return <Cmp />;
}
