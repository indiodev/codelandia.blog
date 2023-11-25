import { z } from "zod";
import { Post as Schema } from "~/schemas";
import { Base } from "./base";

type Create = z.infer<typeof Schema.Create>;

export interface Post extends Base, Create {
  like_count: number | null;
}
