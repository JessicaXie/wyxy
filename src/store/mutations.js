/*
包含n个用于直接更新状态数据方法的对象
 */
import Vue from 'vue'
import {
  RECEIVE_ALLDATA,
  RECEIVE_ITEMS,
  RECEIVE_TOPIC,
  RECEIVE_HOME,
  RECEIVE_BANNER
} from './mutation-types'

export default {
  [RECEIVE_ALLDATA] (state, {alldata}) {
    state.alldata = alldata
  },
  [RECEIVE_HOME] (state, {home}) {
    state.home = home
  },
  [RECEIVE_TOPIC] (state, {topic}) {
    state.topic = topic
  },
  [RECEIVE_BANNER] (state, {banner}) {
    state.banner = banner
  },
  [RECEIVE_ITEMS] (state, {items}) {
    state.items = items
  }
}
