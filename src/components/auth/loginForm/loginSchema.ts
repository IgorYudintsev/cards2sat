import {z} from "zod";

export const loginSchema = z.object({
    //email: z.string().email(), автоматом сгенерирует текст ошибки
    email: z.string().email('Please enter a valid email'), //прописываем в ручную
    //password: z.string().min(3),
    password: z.string().min(3,'to short').max(10,'to long'),
    rememberMe:z.boolean().optional()
})