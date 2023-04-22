<template>
    <div class="flex items-center gap-4">
        <NAvatar object-fit="cover" :size="size" circle :src="src" />
        <div><slot /></div>
    </div>
</template>

<script setup lang="tsx">
import { NAvatar } from "naive-ui";

defineProps<{
    src: string;
    size?: number;
}>();
</script>
