/*
 * @Author: zhangcx01
 * @Date: 2020-07-30 17:40:24
 * @LastEditTime: 2020-07-30 18:00:21
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 * @FilePath: /hooksdemo/src/screens/HomeScreen/ContentList.js
 */
import * as React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

function ContentList(props) {
  const {data, onItemClick} = props;

  function renderItem({item}) {
    return <ListItem data={item} onPress={onItemClick} />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
}

function ListItem(props) {
  const {data, onPress} = props || {};
  const {title} = data || {};
  return (
    <TouchableOpacity style={styles.listItem} onPress={() => onPress(data)}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

export default ContentList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#CCC',
  },
});
