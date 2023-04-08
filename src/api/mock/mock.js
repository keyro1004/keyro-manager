import Mock from "mockjs";
import mockServiceData from "@/api/mock/mockServiceData"

// 定义mock请求拦截
Mock.mock('/api/home/getData',mockServiceData.staticHomeData)

// 定义mock请求拦截
Mock.mock('/api/aside/getMenuList',mockServiceData.staticMenuList)