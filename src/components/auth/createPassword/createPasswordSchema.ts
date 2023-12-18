//import { zodResolver } from '@hookform/resolvers/zod'
// { useForm } from 'react-hook-form'
import { z } from 'zod'

export const createPasswordSchema = z.object({
  password: z
      .string()
      .trim()
      .min(5, { message: 'Must be 5 or more characters long' })
      .nonempty('Enter password'),
})

// export type FormValues = z.infer<typeof schema>
// export type CreatePasswordFormProps = { onSubmit: (data: FormValues) => void }
//
// export const useCreatePasswordForm = ({ onSubmit }: CreatePasswordFormProps) => {
//   const { handleSubmit, ...rest } = useForm<FormValues>({
//     resolver: zodResolver(schema),
//     mode: 'onSubmit',
//   })
//
//   return { handleSubmit: handleSubmit(onSubmit), ...rest }
//}