import {useForm} from 'react-hook-form'
import {Button, Typography} from '@/components'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {loginSchema} from "@/components/auth/loginForm/loginSchema.ts";
import {ControlledCheckbox} from "@/components/ui/controlled/controlled-checkbox/controlled-checkbox.tsx";
import {DevTool} from "@hookform/devtools";
import ControlledTextField from "@/components/ui/controlled/controlled-textField/controlled-textField.tsx";
import {Card} from "@/components/ui/card";
import style from './loginForm.module.scss'
import {PATH} from "@/routes";


// onSubmit передаем из storybook
type FormValues = z.infer<typeof loginSchema>
type LoginFormProps = {
    onSubmit: (data: FormValues) => void
}

export const LoginForm = ({onSubmit}: LoginFormProps) => {
// export const LoginForm = () => {
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<FormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: 'kakvospitat@gmail.com',
            // email: '',
            password: '',
            rememberMe: false
        }
    })

    //отключили т.к. сабмитим через storybook
    // const onSubmit = (data: FormValues) => {
    //     console.log(data)
    // }


    return (
        <Card className={style.card}>
            <Typography as="h1" variant="h1" className={style.title}>
                Sign In
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
                {/*<Checkbox checked={value} label={'rememberMe'} onChange={onChange}/>*/}
                <ControlledCheckbox control={control} name={'rememberMe'} label={'remember me'}/>

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

//------------------------------------------------------------------------------------------
// import {useController, useForm} from 'react-hook-form'
// import {Button, Checkbox} from '@/components'
// import {TextField} from '@/components/ui/textField'
// import { z} from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'
// import {loginSchema} from "@/components/auth/loginForm/loginSchema.ts";
//
//
// //const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
//
// type FormValues = z.infer<typeof loginSchema>
//
// // type FormValues = {
// //     email: string
// //     password: string
// //     rememberMe: boolean
// // }
//
// export const LoginForm = () => {
//     const {
//         control,
//         register,
//         handleSubmit,
//         formState: {errors},
//     } = useForm<FormValues>({
//         resolver: zodResolver(loginSchema),
//         defaultValues: {
//             email: 'kakvospitat@gmail.com',
//             password: '',
//             rememberMe: false
//         }
//     })
//
//    // console.log('errors: ', errors)
//
//     const {
//         field: {value, onChange},
//     } = useController({
//         name: 'rememberMe',
//         control,
//     })
//
//     const onSubmit = (data: FormValues) => {
//         console.log(data)
//     }
//
//
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <TextField {...register('email', )}
//                        label={'email'}
//                        errorMessage={errors.email?.message}
//                        type="email"/>
//
//             <TextField {...register('password')}
//                        label={'password'}
//                        errorMessage={errors.password?.message}
//                        type="password"
//             />
//             <Checkbox checked={value} label={'rememberMe'} onChange={onChange}/>
//             <Button type="submit">Submit</Button>
//         </form>
//     )
// }


//---------------------------------------------------------------------------

// import {useController, useForm} from 'react-hook-form'
//
// import {Button, Checkbox} from '@/components'
// import {TextField} from '@/components/ui/textField'
//
// type FormValues = {
//     email: string
//     password: string
//     rememberMe: boolean
// }
//
// const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
//
// export const LoginForm = () => {
//     const {
//         control,
//         register,
//         handleSubmit,
//         formState: {errors},
//     } = useForm<FormValues>({
//         defaultValues: {
//             email: 'kakvospitat@gmail.com',
//             password: '',
//             rememberMe: false
//         }
//     })
//
//    //console.log('errors: ', errors)
//
//     const {
//         field: {value, onChange},
//     } = useController({
//         name: 'rememberMe',
//         control,
//     })
//
//     const onSubmit = (data: FormValues) => {
//         console.log(data)
//     }
//
//
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <TextField {...register('email', {
//                 required: 'Email is required',
//                 pattern: {value: emailRegex, message: 'Invalid email'},
//             })}
//                        label={'email'}
//                        errorMessage={errors.email?.message}
//                        type="email"/>
//
//             <TextField {...register('password', {
//                 required: 'Password is required',
//                 minLength: {value: 3, message: 'Password has to be at least 3 characters long'},
//             })}
//                        label={'password'}
//                        errorMessage={errors.password?.message}
//                        type="password"
//             />
//             <Checkbox checked={value} label={'rememberMe'} onChange={onChange}/>
//             <Button type="submit">Submit</Button>
//         </form>
//     )
// }
