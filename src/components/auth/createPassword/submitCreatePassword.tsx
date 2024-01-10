import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {createPasswordSchema} from "@/components/auth/createPassword/createPasswordSchema.ts";

export type FormValues = z.infer<typeof createPasswordSchema>
export type CreatePasswordFormProps = { onSubmit: (data: FormValues) => void }


export const submitCreatePassword = ({ onSubmit }: CreatePasswordFormProps) => {
    const { handleSubmit, ...rest } = useForm<FormValues>({
        resolver: zodResolver(createPasswordSchema),
        defaultValues: {
            password: '',
        },
        mode: 'onSubmit',
    })

    return { handleSubmit: handleSubmit(onSubmit), ...rest }
}

//------------------------------------------------------------------------
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useForm } from 'react-hook-form'
// import { z } from 'zod'
// import {createPasswordSchema} from "@/components/auth/createPassword/createPasswordSchema.ts";
//
// export type FormValues = z.infer<typeof createPasswordSchema>
// export type CreatePasswordFormProps = { onSubmit: (data: FormValues) => void }
//
//
// export const submitCreatePassword = ({ onSubmit }: CreatePasswordFormProps) => {
//     const { handleSubmit, ...rest } = useForm<FormValues>({
//         resolver: zodResolver(createPasswordSchema),
//         defaultValues: {
//             password: '',
//         },
//         mode: 'onSubmit',
//     })
//
//     return { handleSubmit: handleSubmit(onSubmit), ...rest }
// }