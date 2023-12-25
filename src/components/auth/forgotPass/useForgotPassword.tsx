
import React from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {forgotPasswordSchema} from "@/components/auth/forgotPass/forgotPasswordSchema.ts";
import {useForm} from "react-hook-form";
import {z} from "zod";

type FormValues = z.infer<typeof forgotPasswordSchema>
export type ForgotPasswordFormProps = { onSubmit: (data: FormValues) => void }
export const useForgotPassword:React.FC<ForgotPasswordFormProps>=({onSubmit})=>{
    const { handleSubmit, ...rest } = useForm<FormValues>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: 'kakvospitat@gmail.com',
            // email: '',
        },
        mode: 'onSubmit',
    })
    return { handleSubmit: handleSubmit(onSubmit), ...rest }
}