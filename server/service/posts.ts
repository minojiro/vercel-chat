import { prisma } from "../lib/prisma";

export const createPost = async (data: { body: string; userName: string }) => {
  return await prisma.post.create({
    data,
  });
};

export const getAllPosts = async () => {
  return await prisma.post.findMany({ orderBy: { createdAt: "desc" } });
};
