import {useForm} from 'react-hook-form'
import {Button} from '@/components'
import {TextField} from '@/components/ui/textField'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {loginSchema} from "@/components/auth/loginForm/loginSchema.ts";
import {ControlledCheckbox} from "@/components/ui/controlled/controlled-checkbox/controlled-checkbox.tsx";
import {DevTool} from "@hookform/devtools";

type FormValues = z.infer<typeof loginSchema>

// type LoginFormProps={
//     onSubmit:(data: FormValues) =>void
// }
// onSubmit нужно будет передавать
// export const LoginForm = ({onSubmit}:LoginFormProps) => {


export const LoginForm = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: 'kakvospitat@gmail.com',
            password: '',
            rememberMe: false
        }
    })

    const onSubmit = (data: FormValues) => {
        console.log(data)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <DevTool control={control} />
            <TextField {...register('email', )}
                       label={'email'}
                       errorMessage={errors.email?.message}
                       type="email"/>

            <TextField {...register('password')}
                       label={'password'}
                       errorMessage={errors.password?.message}
                       type="password"
            />
            {/*<Checkbox checked={value} label={'rememberMe'} onChange={onChange}/>*/}
            <ControlledCheckbox control={control} name={'rememberMe'} label={'remember me'}/>
            <Button type="submit">Submit</Button>
        </form>
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
