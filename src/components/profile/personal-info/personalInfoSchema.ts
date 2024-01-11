import {z} from "zod";

export const personalInfoSchema = z.object({
    name: z.string().min(3, 'to short').max(10, 'to long'),
})