/*
包含n个接口请求函数的模块
 */

import ajax from './ajax'
// 获取所有的数据
export const reqData = () => ajax('/data')
// 获取分类的数据
export const reqItems = () => ajax('/nav')
