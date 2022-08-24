<template>
    <div>
        <headerVue></headerVue>
        <router-view />
        <footerVue></footerVue>
    </div>
</template>
<script setup lang="ts">
import footerVue from "./components/Footer.vue";
import headerVue from "./components/Header.vue";

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
console.log(import.meta.env);
</script>

<style scoped></style>
