import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {personalInfoSchema} from "@/components/profile/personal-info/personalInfoSchema.ts";

type FormValues = z.infer<typeof personalInfoSchema>

export const usePersonalInfoForm = (onSubmit: (data: { name: string }) => void, name: string) => {
    const { handleSubmit, ...rest } = useForm<FormValues>({
        defaultValues: {
            name: name,
        },
        resolver: zodResolver(personalInfoSchema),
        mode: 'onSubmit',
    })

    return { handleSubmit: handleSubmit(onSubmit), ...rest }
}
