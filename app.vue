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
  <div>
    <div>
      <PostForm :onSubmit="handleSubmit" />
    </div>
    <div>
      <PostItem v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>
