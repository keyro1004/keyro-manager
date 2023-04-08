import http from "@/utils/requset";

// 获取当前月份的日程
export const getScheduleByMonth = () => {
    // 返回一个promise对象
    return http.get('/schedule/getScheduleByMonth')
}