import http from "@/utils/requset";

export const getData = () =>{
    // 返回一个promise对象
    return http.get('/home/getData')
}