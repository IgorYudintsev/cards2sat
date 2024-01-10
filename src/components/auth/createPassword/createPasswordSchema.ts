import { z } from 'zod'

export const createPasswordSchema = z.object({
  password: z
      .string()
      .trim()
      .min(5, { message: 'Must be 5 or more characters long' })
      .nonempty('Enter password'),
})

