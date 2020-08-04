/*
 * @Author: zhangcx01
 * @Date: 2020-07-30 19:19:44
 * @LastEditTime: 2020-07-30 19:24:34
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /hooksdemo/src/screens/DetailsScreen/components/UseEffect/ClassEffect.js
 */
import React, {PureComponent} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class ClassEffect extends PureComponent {
  timer = null;
  state = {
    num: 0,
  };
  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      const {num} = this.state;
      this.setState({num: num + 1});
    }, 1000);
  };

  stopTimer = () => {
    this.timer && clearInterval(this.timer);
  };

  render() {
    const {num} = this.state;
    return (
      <View style={styles.container}>
        <Text> 类组件 数字:{num} </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {},
});
