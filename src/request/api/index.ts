import http from "../methods";
export const getList = <T = any>(p: T) => {
    return http.post("m1/1471951-0-default/recommend_api/v1/article/recommend_cate_feed", p);
};
export const getAuthor = <T = any>(p: T) => {
    return http.get("m1/1471951-0-default/recommend_api/v1/article/recommend", p);
};
// https://mock.apifox.cn/
