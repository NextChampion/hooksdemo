/*
 * @Author: zhangcx01
 * @Date: 2020-08-04 13:55:06
 * @LastEditTime: 2020-08-04 14:19:29
 * @LastEditors: zcx4150@gmail.com
 * @Description:
 */

export function init(initialCount) {
  return {count: initialCount};
}

const INCREASE = 'increment';
const DECREASE = 'decrement';
const RESET = 'reset';

export default function counter(state, action) {
  switch (action.type) {
    case INCREASE:
      return {count: state.count + 1};
    case DECREASE:
      return {count: state.count - 1};
    case RESET:
      return init(action.payload);
    default:
      throw new Error();
  }
}

export function increase() {
  return {type: INCREASE};
}

export function decrease() {
  return {type: DECREASE};
}

export function reset(initialCount) {
  return {type: RESET, payload: initialCount};
}
