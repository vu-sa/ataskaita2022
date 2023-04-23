<template>
  <div class="flex items-center gap-4">
    <div>
      <NAvatar
        class="align-middle"
        :size="size"
        object-fit="cover"
        round
        :src="src"
      ></NAvatar>
    </div>
    <div><slot /></div>
  </div>
</template>

<script setup lang="tsx">
import { NAvatar } from "naive-ui";

defineProps<{
  name?: string;
  src: string;
  size?: number;
}>();
</script>
