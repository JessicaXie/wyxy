/*
包含n个用于直接更新状态数据方法的对象
 */
import Vue from 'vue'
import {
  RECEIVE_ALLDATA,
  RECEIVE_ITEMS
} from './mutation-types'

export default {
  [RECEIVE_ALLDATA] (state, {alldata}) {
    state.alldata = alldata
  },
  [RECEIVE_ITEMS] (state, {items}) {
    state.items = items
  }
}
