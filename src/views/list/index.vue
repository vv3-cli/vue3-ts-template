<template>
    <div class="main">
        <p>list请求功能:</p>
        <ul class="list">
            <li v-for="item in List" :key="item.article_id">
                {{ item.article_info.title }}
            </li>
        </ul>
        <p>list路由功能:</p>
        <ul>
            <li>
                <router-link :to="{ path: '/index' }">点击进入首页</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { getList } from "@/request/api/index";
import { ref } from "vue";

interface resObj {
    [key: string]: string | object;
    user_name: string;
    article_id: string;
    user_id: string;
    article_info: {
        title: string;
    };
}
interface Result {
    count: number;
    cursor: string;
    data: any;
    err_msg: string;
    err_no: number;
    has_more: boolean;
}

const List = ref<resObj[]>([]);

getList({}).then((res: Result) => {
    console.log(res);
    List.value = res.data;
});
</script>

<style lang="scss" scoped>
.main {
    text-align: center;

    .list {
        min-height: 200px;
    }

    p {
        font-size: 30px;
        text-decoration-style: dashed;
    }
}
</style>
