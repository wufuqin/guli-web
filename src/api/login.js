import request from '@/utils/request'

/**
 * 登录
 * @param username
 * @param password
 */
export function login(username, password) {
  return request({
    url: '/eduservice/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

/**
 * 获取用户信息
 * @param token
 */
export function getInfo(token) {
  return request({
    url: '/eduservice/user/info',
    method: 'get',
    params: { token }
  })
}

/**
 * 退出登录
 */
export function logout() {
  return request({
    url: '/eduservice/user/logout',
    method: 'post'
  })
}
