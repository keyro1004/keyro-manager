export default {
    staticHomeData() {
        return {
            id: "1",
            name: "曾健朗",
            sex: "男"
        }
    },
    staticMenuList() {
        return [
            {
                path: "/",
                name: "home",
                label: "主页",
                icon: "s-home",
                url: "home/home",
            },
            {
                path: "/system",
                name: "system",
                label: "应用管理",
                icon: "s-home",
                url: "system/system",
            },
            {
                label: "后台管理",
                icon: "s-platform",
                children: [
                    {
                        path: "/user",
                        name: "user",
                        label: "用户管理",
                        icon: "s-user-solid",
                        url: "user/userList",
                    },
                    {
                        path: "/role",
                        name: "role",
                        label: "角色管理",
                        icon: "user-solid",
                        url: "user/userList",
                    },
                    {
                        path: "/permission",
                        name: "permission",
                        label: "权限管理",
                        icon: "user-solid",
                        url: "user/userList",
                    },
                    {
                        path: "/menu",
                        name: "menu",
                        label: "菜单管理",
                        icon: "user-solid",
                        url: "user/userList",
                    },
                    {
                        path: "/dic",
                        name: "dic",
                        label: "字典管理",
                        icon: "user-solid",
                        url: "user/userList",
                    },
                    {
                        path: "/logger",
                        name: "logger",
                        label: "日志管理",
                        icon: "user-solid",
                        url: "user/userList",
                    },
                ],
            },

        ]
    }
}