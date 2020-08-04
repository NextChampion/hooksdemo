/*
 * @Author: zhangcx01
 * @Date: 2020-08-04 11:32:33
 * @LastEditTime: 2020-08-04 11:55:07
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 */
import React, {PureComponent} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export default class ClassContext extends PureComponent {
  render() {
    return (
      <View>
        <Text> ClassContext </Text>
        <GrandParent />
      </View>
    );
  }
}

const MyContext = React.createContext(100);

class GrandParent extends PureComponent {
  state = {
    num: 100,
  };

  add = () => {
    const {num} = this.state;
    console.log('add', num);
    this.setState({num: num + 1});
  };

  render() {
    return (
      <MyContext.Provider style={styles.container} value={this.state.num}>
        <Text> GrandParent </Text>
        <Parent onPress={this.add} />
      </MyContext.Provider>
    );
  }
}

class Parent extends PureComponent {
  render() {
    const {onPress} = this.props;
    return (
      <View style={styles.container}>
        <Text> Parent </Text>
        <Button title="增加" onPress={onPress} />
        <Child />
      </View>
    );
  }
}

class Child extends PureComponent {
  static contextType = MyContext;
  render() {
    const num = this.context;
    return (
      <View style={styles.container}>
        <Text> Child </Text>
        <Text> num: {num} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 5,
  },
});
