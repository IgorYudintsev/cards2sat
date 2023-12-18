import {useForm} from 'react-hook-form'
import {Button, Typography} from '@/components'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {DevTool} from "@hookform/devtools";
import ControlledTextField from "@/components/ui/controlled/controlled-textField/controlled-textField.tsx";
import {Card} from "@/components/ui/card";
import style from '../auth.module.scss'

import {clsx} from "clsx";
import {createPasswordSchema} from "@/components/auth/createPassword/createPasswordSchema.ts";


// onSubmit передаем из storybook
type FormValues = z.infer<typeof createPasswordSchema>
export type createPasswordProps = {
    onSubmit: (data: FormValues) => void
}

export const CreatePassword = ({onSubmit}: createPasswordProps) => {
// export const CreatePassword = () => {
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<FormValues>({
        resolver: zodResolver(createPasswordSchema),
        defaultValues: {
            password: '',
        }
    })

    //отключили т.к. сабмитим через storybook
    // const onSubmit = (data: FormValues) => {
    //     console.log(data)
    // }


    const classNames = {
        forgot: clsx(style.title, style.marginBottom),
        caption: clsx(style.typographyCaption, style.marginBottom),
    }

    return (
        <Card className={style.card}>
            <Typography as="h1" variant="h1" className={classNames.forgot}>
                Create new password
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DevTool control={control}/>

                <ControlledTextField
                    name={"password"}
                    control={control}
                    label={'password'}
                    type="password"
                    errorMessage={errors.password?.message}
                />

                <Typography variant="caption" className={classNames.caption}>
                    {"Create new password and we will send you further instructions to email"}
                </Typography>

                <Button type="submit" fullWidth className={style.signUpSubmit}>Create new password</Button>
            </form>
        </Card>
    )
}
