import {useForm} from 'react-hook-form'
import {Button, Typography} from '@/components'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {DevTool} from "@hookform/devtools";
import ControlledTextField from "@/components/ui/controlled/controlled-textField/controlled-textField.tsx";
import {Card} from "@/components/ui/card";
import style from '../auth.module.scss'
import {PATH} from "@/routes";
import {forgotPasswordSchema} from "@/components/auth/forgotPass/forgotPasswordSchema.ts";
import {clsx} from "clsx";


// onSubmit передаем из storybook
type FormValues = z.infer<typeof forgotPasswordSchema>
export type ForgotPasswordProps = {
    onSubmit: (data: FormValues) => void
}

export const ForgotPassword = ({onSubmit}: ForgotPasswordProps) => {
// export const SignUpForm = () => {
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<FormValues>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: 'kakvospitat@gmail.com',
            // email: '',
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
                Forgot your password?
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

                <Typography variant="caption" className={classNames.caption}>
                    {"Enter yout email address and we will send your futher instructions"}
                </Typography>

                <Button type="submit" fullWidth className={style.signUpSubmit}>Send Instructions</Button>
            </form>

            <Typography variant="body2" className={style.dontHaveAccount}>
                {"Did you remember your password?"}
            </Typography>
            <Typography as={'a'} href={PATH.LOGIN} className={style.signUpLink}>
                Try logging in
            </Typography>
        </Card>
    )
}
