/*
 * @Author: zhangcx01
 * @Date: 2020-08-04 11:55:25
 * @LastEditTime: 2020-08-04 13:46:45
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 */
import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function HooksUseContext() {
  return (
    <View>
      <Text>HooksUseContext</Text>
      <GrandParent />
    </View>
  );
}

const MyContext = React.createContext({num: 100});

function GrandParent() {
  const [num, setNum] = useState(100);
  return (
    <MyContext.Provider value={num} style={styles.container}>
      <Text> GrandParent </Text>
      <Parent
        onPress={() => {
          setNum(num + 1);
        }}
      />
    </MyContext.Provider>
  );
}

function Parent(props) {
  const {onPress} = props;
  return (
    <View style={styles.container}>
      <Text> Parent </Text>
      <Button title="增加" onPress={onPress} />
      <Child />
    </View>
  );
}

function Child() {
  const num = useContext(MyContext);
  return (
    <View style={styles.container}>
      <Text> Child </Text>
      <Text>{num}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 5,
  },
});
