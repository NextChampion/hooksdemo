/*
 * @Author: zhangcx01
 * @Date: 2020-07-30 17:20:50
 * @LastEditTime: 2020-07-30 17:55:46
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /hooksdemo/src/screens/HomeScreen/index.js
 */
import React, {PureComponent} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ContentList from './ContentList';
export default class HomeScreen extends PureComponent {
  data = [
    {
      key: '1',
      title: 'UseState',
    },
    {
      key: '2',
      title: 'UseEffect',
    },
    {
      key: '3',
      title: 'UseContext',
    },
    {
      key: '4',
      title: 'UseReducer',
    },
    {
      key: '5',
      title: 'UseCallBack',
    },
    {
      key: '6',
      title: 'UseMemo',
    },
    {
      key: '7',
      title: 'UseRef',
    },
    {
      key: '8',
      title: 'UseImperativeHandle',
    },
    {
      key: '9',
      title: 'UseLayoutEffect',
    },
    {
      key: '10',
      title: 'UseDebugValue',
    },
  ];

  onItemClick = (data) => {
    const {navigation} = this.props;
    const {title} = data || {};
    navigation.navigate('Details', {title});
  };

  render() {
    return (
      <View style={styles.container}>
        <ContentList onItemClick={this.onItemClick} data={this.data} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'center',
  },
});
