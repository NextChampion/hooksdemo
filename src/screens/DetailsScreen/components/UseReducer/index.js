/*
 * @Author: zhangcx01
 * @Date: 2020-07-30 17:46:22
 * @LastEditTime: 2020-08-04 14:18:39
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /hooksdemo/src/screens/DetailsScreen/components/UseReducer.js
 */
import React, {Component, useReducer} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import Counter from './Counter';

export default class UseReducer extends Component {
  render() {
    return (
      <View>
        <Text> UseReducer </Text>
        <App />
      </View>
    );
  }
}

const initialState = {count: 0};

const INCREASE = 'increment';
const DECREASE = 'decrement';

function reducer(state, action) {
  switch (action.type) {
    case INCREASE:
      return {count: state.count + 1};
    case DECREASE:
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function increase() {
  return {type: INCREASE};
}

function decrease() {
  return {type: DECREASE};
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View>
      <View style={styles.container}>
        <Button onPress={() => dispatch(increase())} title="+" />
        <Text>Count: {state.count}</Text>
        <Button onPress={() => dispatch(decrease())} title="-" />
      </View>
      <Counter initialCount={100} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
