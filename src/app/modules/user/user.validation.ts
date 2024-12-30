import { z } from "zod";

const userValidationSchema = z.object({
    id: z.string(),
    password: z.string().max(20, { message: "Password can't be more than 20 characters" }),
    needsPasswordChange: z.boolean().optional().default(true),
    role: z.enum(["admin", "student", "faculty"]),
    status: z.enum(["in-progress", "blocked"]),
    isDeleted: z.boolean().optional().default(false)
});

export const UserValidation = {
    userValidationSchema
};