import http from "@/utils/requset";

// 获取用户菜单
export const getMenuList = () =>{
    // 返回一个promise对象
    return http.get('/aside/getMenuList')
}
