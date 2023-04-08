import http from "@/utils/requset";

// 获取用户的应用
export const getSystemListByHome = () => {
    // 返回一个promise对象
    return http.get('/system/getSystemListByHome')
}

// 获取应用注册人数图表
export const getSystemDataByEcharts = () => {
    // 返回一个promise对象
    return http.get('/system/getSystemDataByEcharts')
}
