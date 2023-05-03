import { getAllPosts } from "../../service/posts";

export default defineEventHandler(async (event) => {
  const posts = await getAllPosts();
  return posts;
});
