/*
包含n个用于间接更新状态数据方法的对象
 */
import {
  reqData,
  reqItems
} from '../api'

import {
  RECEIVE_ALLDATA,
  RECEIVE_ITEMS
} from './mutation-types'

export default {
  // 异步获取所有的data数据
  async getData ({commit}) {
    // 发送ajax请求
    const result = await reqData()
    if (result.code === 0) {
      const alldata = result.data
      commit(RECEIVE_ALLDATA, {alldata})
    }
  },

  // 异步获取所有的data数据
  async getItems ({commit}) {
    // 发送ajax请求
    const result = await reqItems()
    if (result.code === 0) {
      const items = result.data
      commit(RECEIVE_ITEMS, {items})
    }
  }
}
