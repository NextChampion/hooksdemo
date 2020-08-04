/*
 * @Author: zhangcx01
 * @Date: 2020-08-04 11:32:42
 * @LastEditTime: 2020-08-04 11:41:59
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 */
import React, {PureComponent, Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import PropTypes from 'prop-types';

export default class ClassContext1 extends PureComponent {
  render() {
    return (
      <View>
        <Text> ClassContext1 </Text>
        <GrandParent />
      </View>
    );
  }
}

class GrandParent extends PureComponent {
  static childContextTypes = {
    num: PropTypes.number,
  };

  state = {
    num: 1,
  };

  getChildContext() {
    return {
      num: this.state.num,
    };
  }

  add = () => {
    const {num} = this.state;
    console.log('add', num);
    this.setState({num: num + 1});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> GrandParent </Text>
        <Parent onPress={this.add} />
      </View>
    );
  }
}

class Parent extends Component {
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

class Child extends Component {
  static contextTypes = {
    num: PropTypes.number,
  };
  render() {
    const {num} = this.context;
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
