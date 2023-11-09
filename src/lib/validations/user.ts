import * as z from "zod";

export const UserValidation = z.object({
  profile_photo: z.string().url().trim().optional(),
  name: z.string().min(3).max(30).trim(),
  username: z.string().min(3).max(30).trim(),
  bio: z.string().max(1000).trim().optional(),
});

export type UserType = z.infer<typeof UserValidation>;
