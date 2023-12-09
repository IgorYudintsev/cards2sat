import {useController, useForm} from 'react-hook-form'

import {Button, Checkbox} from '@/components'
import {TextField} from '@/components/ui/textField'

type FormValues = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm = () => {
    const {
        control,
        register,
        handleSubmit
    } = useForm<FormValues>({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false
        }
    })

    const {
        field: {value, onChange},
    } = useController({
        name: 'rememberMe',
        control,
    })

    const onSubmit = (data: FormValues) => {
        console.log(data)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register('email')} label={'email'} type="email"/>
            <TextField {...register('password')} label={'password'} type="password"/>
            <Checkbox checked={value} label={'rememberMe'} onChange={onChange}/>
            <Button type="submit">Submit</Button>
        </form>
    )
}


//---------------------------------------------------------------------------
// import { useForm } from "react-hook-form";
//
// import { SuperInput } from "@/components/ui/superInput";
// import { SuperButton } from "@/components/ui/superButton";
// import { CheckBox } from "@/components";
//
// export type FormValues = {
//     email: string;
//     password: string;
//     checkBox: boolean;
// };
//
// export const LoginForm = () => {
//     const {
//         control,
//         handleSubmit,
//         formState: { errors }
//     } = useForm<FormValues>();
//
//     const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
//
//     const onSubmit = (data: FormValues) => {
//         //console.log(data);
//        // console.log("errors: ", errors);
//     };
//
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <SuperInput
//                 control={control}
//                 name="email"
//                 icon="classic"
//                 disabled={false}
//                 label="email"
//                 rules={{
//                     required: "Email is required",
//                     pattern: {
//                         value: emailRegex,
//                         message: 'Invalid email'
//                     }
//                 }}
//                 errors={errors.email}
//             />
//             <SuperInput
//                 control={control}
//                 name="password"
//                 icon="password"
//                 disabled={false}
//                 label="password"
//             />
//             <CheckBox control={control} name="checkBox" />
//             <SuperButton type="submit">Submit</SuperButton>
//         </form>
//     );
// };

//--------------------------------------------------
// import {useForm} from "react-hook-form";
// import {SuperInput} from "@/components/ui/superInput";
// import {SuperButton} from "@/components/ui/superButton";
// import {CheckBox} from "@/components";
//
//
// export type FormValues = {
//     email: string;
//     password: string;
//     checkBox: boolean;
// };
//
// export const LoginForm = () => {
//     const {
//         control,
//         handleSubmit,
//         reset,
//         formState: {errors}
//     } = useForm<FormValues>();
//
//     const emailRegex =
//         /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
//
//     const onSubmit = (data: FormValues,) => {
//         console.log(data);
//        };
//
//
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <SuperInput
//                 control={control}
//                 name="email"
//                 icon={"classic"}
//                 disabled={false}
//                 label={"email"}
//                 rules={
//                 { required: "Email is required" ,
//                     pattern: {value: emailRegex, message: 'Invalid email' }
//                 }
//             }
//                 errors={errors.email}
//                 //defaultValue={"developeryudintsev@gmail.com"}
//             />
//             <SuperInput
//                 control={control}
//                 name="password"
//                 icon={"password"}
//                 disabled={false}
//                 label={"password"}
//             />
//             <CheckBox control={control} name="checkBox"/>
//             <SuperButton type="submit">Submit</SuperButton>
//         </form>
//     );
// };

