import {z} from "zod";

export const signUpSchema = z
    .object({
        email: z.string().email('Please enter a valid email'),
        password: z.string().min(3, 'Too short').max(10, 'Too long'),
        confirm: z
            .string()
            .min(3, 'Too short')
            .max(10, 'Too long')

    })
    .refine((data) => data.password === data.confirm, {
        message: 'Passwords do not match',
        path: ['confirm'],
    });

