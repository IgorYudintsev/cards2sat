import {useForm} from 'react-hook-form'
import {Button, Typography} from '@/components'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {DevTool} from "@hookform/devtools";
import ControlledTextField from "@/components/ui/controlled/controlled-textField/controlled-textField.tsx";
import {Card} from "@/components/ui/card";
import style from '../auth.module.scss'
import {PATH} from "@/routes";
import {signUpSchema} from "@/components/auth/signUp/signUpSchema.ts";
import {clsx} from "clsx";


// onSubmit передаем из storybook
type FormValues = z.infer<typeof signUpSchema>
export type SignUpFormProps = {
    onSubmit: (data: FormValues) => void
}

export const SignUpForm = ({onSubmit}: SignUpFormProps) => {
// export const SignUpForm = () => {
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<FormValues>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: 'kakvospitat@gmail.com',
            // email: '',
            password: '',
            confirm: '',
        }
    })

    //отключили т.к. сабмитим через storybook
    // const onSubmit = (data: FormValues) => {
    //     console.log(data)
    // }

    const classNames = {
        signIn: clsx(style.title, style.marginBottom),
    }

    return (
        <Card className={style.card}>
            <Typography as="h1" variant="h1" className={classNames.signIn}>
                Sign Up
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DevTool control={control}/>

                <ControlledTextField
                    name={"email"}
                    control={control}
                    label={'email'}
                    type="email"
                    errorMessage={errors.email?.message}
                />

                <ControlledTextField
                    name={"password"}
                    control={control}
                    label={'password'}
                    type="password"
                    errorMessage={errors.password?.message}
                />
                <ControlledTextField
                    name={"confirm"}
                    control={control}
                    label={'confirm'}
                    type="password"
                    errorMessage={errors.confirm?.message}
                />

                <Button type="submit" fullWidth className={style.marginTop}>Sign UP</Button>
            </form>

            <Typography variant="body2" className={style.dontHaveAccount}>
                {"Already have an account?"}
            </Typography>
            <Typography as={'a'} href={PATH.LOGIN} className={style.signUpLink}>
                Sign In
            </Typography>
        </Card>
    )
}
