<script setup lang="ts">
const { data: posts, refresh: refleshPosts } = await useAsyncData("item", () =>
  $fetch("/api/posts")
);

const handleSubmit = async (body: { body: string; userName: string }) => {
  await $fetch("/api/posts", { method: "POST", body });
  refleshPosts();
};
</script>

<template>
  <div class="mx-auto max-w-lg">
    <div class="py-5 top-0 sticky bg-base-100">
      <PostForm :onSubmit="handleSubmit" />
    </div>
    <div class="flex flex-col gap-3">
      <PostItem v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>
