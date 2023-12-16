import {useForm} from 'react-hook-form'
import {Button, Typography} from '@/components'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {DevTool} from "@hookform/devtools";
import ControlledTextField from "@/components/ui/controlled/controlled-textField/controlled-textField.tsx";
import {Card} from "@/components/ui/card";
import style from './signUpForm.module.css'
import {PATH} from "@/routes";
import {signUpSchema} from "@/components/auth/signUp/signUpSchema.ts";


// onSubmit передаем из storybook
type FormValues = z.infer<typeof signUpSchema>
export type SignUpFormProps = {
    onSubmit: (data: FormValues) => void
}

export const SignUpForm = ({onSubmit}: SignUpFormProps) => {
// export const LoginForm = () => {
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
            password2: '',
        }
    })

    //отключили т.к. сабмитим через storybook
    // const onSubmit = (data: FormValues) => {
    //     console.log(data)
    // }


    return (
        <Card className={style.card}>
            <Typography as="h1" variant="h1" className={style.title}>
                Sign Up
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DevTool control={control}/>
                {/*<TextField {...register('email', )}*/}
                {/*           label={'email'}*/}
                {/*           errorMessage={errors.email?.message}*/}
                {/*           type="email"/>*/}

                <ControlledTextField
                    name={"email"}
                    control={control}
                    label={'email'}
                    type="email"
                    errorMessage={errors.email?.message}
                />

                {/*<TextField {...register('password')}*/}
                {/*           label={'password'}*/}
                {/*           errorMessage={errors.password?.message}*/}
                {/*           type="password"*/}
                {/*/>*/}
                <ControlledTextField
                    name={"password"}
                    control={control}
                    label={'password'}
                    type="password"
                    errorMessage={errors.password?.message}
                />
                <ControlledTextField
                    name={"password2"}
                    control={control}
                    label={'password2'}
                    type="password"
                    errorMessage={errors.password2?.message}
                />

                <Typography
                    variant="body2"
                    as="a"
                    href={PATH.FORGOT_PASSWORD}
                    className={style.forgotPassword}
                >
                    Forgot Password?
                </Typography>
                <Button type="submit" fullWidth>Submit</Button>
            </form>

            <Typography variant="body2" className={style.dontHaveAccount}>
                {"Don't have an account?"}
            </Typography>
            <Typography as={'a'} href={PATH.REGISTRATION} className={style.signUpLink}>
                Sign Up
            </Typography>
        </Card>
    )
}
