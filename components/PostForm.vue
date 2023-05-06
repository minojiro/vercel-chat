<script setup lang="ts">
import kawaiiJapaneseNicknames from "kawaii-japanese-nickname";
const getNickname = () => {
  const [japanese] =
    kawaiiJapaneseNicknames[~~(Math.random() * kawaiiJapaneseNicknames.length)];
  return japanese;
};
const userName = ref(getNickname());
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
  <form @submit.prevent="handleSubmit" class="flex items-end gap-3">
    <label>
      <p>ニックネーム</p>
      <input
        class="input input-bordered w-full max-w-xs"
        type="text"
        v-model="userName"
      />
    </label>
    <label>
      <p>メッセージ</p>
      <input
        class="input input-bordered w-full max-w-xs"
        type="text"
        v-model="body"
        placeholder="こんにちは！"
        autofocus
      />
    </label>
    <button class="btn" :disabled="!isSubmittable" type="submit">送信</button>
  </form>
</template>
