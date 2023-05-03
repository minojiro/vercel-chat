<script setup lang="ts">
import dayjs from "dayjs";

const props = defineProps<{
  post: {
    body: string;
    userName: string;
    createdAt: string;
    id: number;
  };
}>();

const formattedCreatedAt = computed(() =>
  dayjs(props.post.createdAt).format("YYYY/MM/DD HH:mm")
);
</script>

<template>
  <section class="bg-base-200 p-2 rounded">
    <div class="flex gap-2 text-sm">
      <p class="font-bold">{{ post.userName }}</p>
      <p>{{ formattedCreatedAt }}</p>
    </div>
    <p>{{ post.body }}</p>
  </section>
</template>
