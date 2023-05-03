import * as yup from "yup";
import { createPost } from "../../service/posts";

const PARAMS_SCHEMA = yup.object({
  body: yup.string().required(),
  userName: yup.string().required(),
});

export default defineEventHandler(async (event) => {
  const params = PARAMS_SCHEMA.cast(await readBody(event));
  return await createPost(params);
});
