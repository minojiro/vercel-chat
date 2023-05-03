<script setup lang="ts">
defineProps<{
  post: {
    body: string;
    userName: string;
    createdAt: string;
    id: number;
  };
}>();
</script>

<template>
  <section>
    <hr />
    <p>{{ post.id }}</p>
    <p>{{ post.createdAt }}</p>
    <p>{{ post.userName }}</p>
    <p>{{ post.body }}</p>
  </section>
</template>
