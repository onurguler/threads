import * as z from "zod";

export const ThreadValidation = z.object({
  thread: z.string().min(3),
  accountId: z.string(),
});

export const CommentValidation = z.object({
  thread: z.string().min(3),
});

export type ThreadType = z.infer<typeof ThreadValidation>;
export type CommentType = z.infer<typeof CommentValidation>;
