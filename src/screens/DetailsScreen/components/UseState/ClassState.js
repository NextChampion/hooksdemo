/*
 * @Author: zhangcx01
 * @Date: 2020-07-30 18:19:52
 * @LastEditTime: 2020-07-30 18:32:02
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /hooksdemo/src/screens/DetailsScreen/components/UseState/ClassState.js
 */
import React, {PureComponent} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

export default class ClassState extends PureComponent {
  state = {
    num: 0,
  };

  increase = () => {
    const {num} = this.state;
    this.setState({num: num + 1});
  };

  decrease = () => {
    const {num} = this.state;
    this.setState({num: num - 1});
  };

  render() {
    const {num} = this.state;
    return (
      <View style={styles.container}>
        <Text> Class组件</Text>
        <View style={styles.content}>
          <Button title="增加" onPress={this.increase} />
          <Text> 数量:{num} </Text>
          <Button title="减少" onPress={this.decrease} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  content: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
