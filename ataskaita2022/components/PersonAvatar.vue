<template>
    <div>
        <NAvatar></NAvatar>
        <span>{{ name }}</span>
    </div>
</template>

<script setup lang="tsx">
import { NAvatar } from "naive-ui";

defineProps<{
    img: string;
    name: string;
}>();
</script>
