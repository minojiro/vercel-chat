<script setup lang="ts">
const userName = ref("user1");
const body = ref("");
const props = defineProps<{
  onSubmit: (payload: { body: string; userName: string }) => Promise<void>;
}>();

const isSubmittable = computed(() => {
  return userName.value && body.value;
});

const handleSubmit = async () => {
  if (!isSubmittable.value) return;
  await props.onSubmit({
    body: body.value,
    userName: userName.value,
  });
  body.value = "";
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label>
      <p>userName</p>
      <input type="text" v-model="userName" />
    </label>
    <label>
      <p>body</p>
      <input type="text" v-model="body" placeholder="hello!" autofocus />
    </label>
    <button :disabled="!isSubmittable" type="submit">submit</button>
  </form>
</template>
