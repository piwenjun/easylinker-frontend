import { axios } from '@/utils/request'

/**
 * 添加根据类型添加设备
 */
export function addDevice (data) {
  const { deviceProtocol } = data
  return axios({
    url: `/easyboot/device/add${deviceProtocol}`,
    method: 'post',
    data
  })
}

/**
 * 查询设备
 */
export function queryDevice (parameter) {
  const { deviceProtocol } = parameter
  return axios({
    url: `easyboot/device/list${deviceProtocol}`,
    method: 'get',
    params: parameter
  })
}

/**
 * 查询设备详情
 */
export function queryDeviceDetail (parameter) {
  return axios({
    url: 'easyboot/device/listHttp',
    method: 'get',
    params: parameter
  })
}

/**
 * 查询设备数据
 */
export function queryDeviceData () {
  return axios({
    url: 'easyboot/deviceData/list',
    method: 'get'
  })
}

/**
 * 查询设备支持协议
 */
export function queryDeviceProtocol () {
  return axios({
    url: 'easyboot/device/listProtocolType',
    method: 'get'
  })
}

/**
 * 查询设备支持类型
 */
export function queryDeviceType () {
  return axios({
    url: 'easyboot/device/listDeviceType',
    method: 'get'
  })
}
