import { z } from "zod";

const Create = z.object({
  title: z.string(),
  content: z.string(),
});

export const Post = {
  Create,
};
