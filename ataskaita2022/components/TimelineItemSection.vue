<template>
    <NTimeline class="mt-4">
        <NTimelineItem v-for="(item, index) in items"
            :key="item.title"
            :type="item.type"
            :title="computeTitle(item.type, index)"
            :content="item.content"
        />
    </NTimeline>
</template>

<script setup lang="ts">
import { NTimeline, NTimelineItem, type TimelineItemProps } from "naive-ui";

const props = defineProps<{
    items: {
        title: TimelineItemProps["title"]
        content: TimelineItemProps["content"]
        // get type from NTImelineItem
        type: TimelineItemProps["type"]
    }[];
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
</script>
