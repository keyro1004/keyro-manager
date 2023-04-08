import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/login.vue'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import User from '../views/user/User.vue'
import Role from '../views/role/Role.vue'
import Permission from '../views/permission/Permission.vue'
import Menu from '../views/menu/Menu.vue'
import Logger from '../views/logger/Logger.vue'
import System from '../views/system/System.vue'
import Dic from '../views/dic/Dic.vue'
import Center from '../views/center/center.vue'


Vue.use(VueRouter)

// 1.创建路由组件
// 2.将路由与组件进行映射
// 3.创建router实例

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/',
        component: Main,
        redirect: '/home', //重定向
        children: [{
            //嵌套路由
            path: 'home',
            component: Home
        }, {
            path: 'user',
            component: User
        }, {
            path: 'role',
            component: Role
        }, {
            path: 'permission',
            component: Permission
        }, {
            path: 'menu',
            component: Menu
        }, {
            path: 'logger',
            component: Logger
        }, {
            path: 'system',
            component: System
        }, {
            path: 'dic',
            component: Dic
        }, {
            path: 'center',
            component: Center
        }]
    }
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

// 解决重复点击路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

//把路由实例暴露到外面
export default router





