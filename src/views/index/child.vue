<template>
    <div>
        <p>父组件传递{{ msg }}</p>
        <p>子组件{{ count }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

defineProps<{ msg: string }>();

const emit = defineEmits(["getValue"]);
const count = ref(3);

setTimeout(() => {
    emit("getValue", count.value);
}, 5000);
</script>
