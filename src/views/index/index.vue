<template>
    <div class="main">
        <p>首页请求功能:</p>
        <ul class="list">
            <li v-for="item in List" :key="item.user_id">
                {{ item.user_name }}
            </li>
        </ul>
        <p>父子传递功能:</p>
        <ChildVue msg="我是父组件" @getValue="getValue"></ChildVue>
        <p>首页路由功能:</p>
        <ul>
            <div class="button">
                <router-link :to="{ path: '/list' }">点击进入列表</router-link>
            </div>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { getAuthor } from "@/request/api/index";
import { ref } from "vue";
import ChildVue from "./child.vue";

interface resObj {
    [key: string]: string;
    user_id: string;
    user_name: string;
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

getAuthor({}).then((res: Result) => {
    console.log(res.data);
    List.value = res.data;
});
const getValue = (value: number) => {
    console.log(value);
};
</script>

<style lang="scss" scoped>
.main {
    text-align: center;

    .list {
        min-height: 200px;
    }

    p {
        font-size: 30px;
    }
}
</style>
