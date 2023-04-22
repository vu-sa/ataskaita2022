<template>
  <NTimeline class="mt-4">
    <NTimelineItem
      v-for="(item, index) in items"
      :key="item.title"
      :type="item.type"
      :title="
        english
          ? computeEnTitle(item.type, index)
          : computeTitle(item.type, index)
      "
      :content="item.content"
    />
  </NTimeline>
</template>

<script setup lang="ts">
import { NTimeline, NTimelineItem, type TimelineItemProps } from "naive-ui";

const props = defineProps<{
  items: {
    title: TimelineItemProps["title"];
    content?: TimelineItemProps["content"];
    // get type from NTImelineItem
    type: TimelineItemProps["type"];
  }[];
  english?: boolean;
}>();

const computeTitle = (type: TimelineItemProps["type"], index: number) => {
  let title = "";

  switch (type) {
    case "default":
      title = "bus vykdoma";
      break;
    case "success":
      title = "įvykdyta";
      break;
    case "warning":
      title = "vykdoma";
      break;
    case "error":
      title = "atsisakyta";
      break;
  }

  return `${index + 1} uždavinys: ${title}`;
};

const computeEnTitle = (type: TimelineItemProps["type"], index: number) => {
  let title = "";

  switch (type) {
    case "default":
      title = "in progress";
      break;
    case "success":
      title = "completed";
      break;
    case "warning":
      title = "in progress";
      break;
    case "error":
      title = "canceled";
      break;
  }

  return `Task ${index + 1}: ${title}`;
};
</script>
