import { prisma } from "../lib/prisma";
import { createPost, getAllPosts } from "./posts";
import { it, expect, beforeEach } from "vitest";

beforeEach(async () => {
  await prisma.post.deleteMany({});
});

it("create post", async () => {
  const post = await createPost({ body: "body1", userName: "userName1" });
  const resultPost = await prisma.post.findUnique({ where: { id: post.id } });
  expect(resultPost?.body).toBe("body1");
  expect(resultPost?.userName).toBe("userName1");
});

it("get all posts", async () => {
  for (let i = 0; i < 3; i++) {
    await prisma.post.create({
      data: { body: `body${i}`, userName: "userName1" },
    });
  }
  const resultPosts = await getAllPosts();
  expect(resultPosts).toHaveLength(3);
  expect(resultPosts[0].userName).toBe("userName1");
  // 新着順
  expect(resultPosts.map(({ body }) => body)).toStrictEqual(
    Array.from({ length: 3 }, (_, i) => `body${2 - i}`)
  );
});
