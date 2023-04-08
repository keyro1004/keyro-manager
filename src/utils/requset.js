import axios from "axios";
import Vue from "vue"

const http = axios.create({
    // 通用请求的地址前缀
    baseURL: '/api',
    // 超时时间
    timeout: 10000
})

// 添加请求拦截器
http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    if (response.status == 200) {
        return response.data
    } else if (response.status == 10000) {
        // 未登录，请返回登录页
        this.$alert('登录过期，请重新登录', {
            confirmButtonText: '确定',
            callback: action => {
                //登录过期，跳转到登录页面
            }
        });
        Vue.$message.error('请求报错了！');
    }
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default http