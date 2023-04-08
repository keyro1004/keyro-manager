export default {
    state: {
        isCollapse: false, //用于控制菜单展开还是收起
        activePath: "/", //激活的路由path
        tabsList: [
            {
                path: "/",
                name: "home",
                label: "主页",
                icon: "s-home",
                url: "home/home",
            }
        ] //面包屑的数据
    },
    mutations: {
        // 修改菜单展开收起方法
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse;
        },
        // 修改activePath的路由
        selectActivePath(state, path) {
            state.activePath = path
        },
        // 更新面包屑的数据
        selectMenu(state, val) {
            // 判断添加的数据是否在数组中
            const idx = state.tabsList.findIndex(item => item.name === val.name);
            if (idx === -1) {
                state.tabsList.push(val);
            }
            // 更新activePath的路由
            state.activePath = val.path;
        },
        // 移除面包屑
        removeMenu(state, val) {
            // 判断添加的数据是否在数组中
            const idx = state.tabsList.findIndex(item => item.path === val);
            if (idx != -1) {
                state.tabsList.splice(idx, 1);
            }
        }
    }
}