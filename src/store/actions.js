/*
包含n个用于间接更新状态数据方法的对象
 */
import {
  reqData,
  reqItems,
  reBanner,
  reqHome,
  reqToPic
} from '../api'

import {
  RECEIVE_ALLDATA,
  RECEIVE_ITEMS,
  RECEIVE_BANNER,
  RECEIVE_HOME,
  RECEIVE_TOPIC
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
  // 异步获取home数据
  async getHome ({commit}) {
    // 发送ajax请求
    const result = await reqHome()
    if (result.code === 0) {
      const home = result.home
      commit(RECEIVE_HOME, {home})
    }
  },
  // 异步获取首页轮播banner数据
  async getBanner ({commit}) {
    // 发送ajax请求
    const result = await reBanner()
    if (result.code === 0) {
      const banner = result.focusList
      commit(RECEIVE_BANNER, {banner})
    }
  },
  // 异步获取识物Topic数据
  async getTopic ({commit}) {
    // 发送ajax请求
    const result = await reqToPic()
    if (result.code === 0) {
      const topic = result.focusList
      commit(RECEIVE_TOPIC, {topic})
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
