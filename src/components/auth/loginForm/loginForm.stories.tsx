import type { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from './loginForm.tsx'


const meta = {
    title: 'Auth/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>


export const Primary: Story = {
    //onSubmit:
}

//-------------------------------------------------------------------------
// import { Meta, Story } from "@storybook/react";
// import { InputProps } from "@/components/ui/superInput/superInput.tsx";
// import { useForm, Control } from "react-hook-form";
// import { FormValues } from "@/components/auth/loginForm/loginForm.tsx";
// import { LoginForm } from "@/components/auth/loginForm/loginForm.tsx";
// import {action} from "@storybook/addon-actions";
//
//
// const meta: Meta<InputProps> = {
//     title: "Auth/LoginForm",
//     component: LoginForm,
//     tags: ["auto-docs"],
//     argTypes: {},
// };
//
// export default meta;
//
// type StoryArgs = {
//     control: Control<FormValues>;
// };
//
// type StoryType = Story<StoryArgs>;
//
// export const Primary: StoryType = (args) => {
//     const {
//         control,
//         register,
//         handleSubmit,
//         formState: { errors }
//     } = useForm<FormValues>();
//
//     const onSubmit = (data: FormValues) => {
//         action("Submit clicked")(data);
//         console.log("errors: ", errors);
//         console.log(data)
//     };
//
//
//
//     return <LoginForm  onSubmit={handleSubmit(onSubmit)} />;
// };


//-------------------------------------------------
// import { Meta, Story } from "@storybook/react";
// import { InputProps } from "@/components/ui/superInput/superInput.tsx";
// import { useForm, Control } from "react-hook-form";
// import {FormValues} from "@/components/auth/loginForm/loginForm.tsx";
// import {LoginForm} from "@/components/auth/loginForm/loginForm.tsx";
//
//
// const meta: Meta<InputProps> = {
//     title: "Auth/LoginForm",
//     component: LoginForm,
//     tags: ["auto-docs"],
//     argTypes: {},
// };
//
// export default meta;
//
// type StoryArgs = {
//     control: Control<FormValues>;
// };
//
// type StoryType = Story<StoryArgs>;
//
// export const Primary: StoryType = (args) => {
//     const {
//         control,
//         register,
//         handleSubmit,
//         formState: { errors }
//     } = useForm<FormValues>();
//     const onSubmit = (data: FormValues) => {
//         action("Submit clicked")(data);
//     };
//     console.log('errors: ', errors)
//     return <LoginForm control={control}  />;
// };

//--------------------------------------------------
// import type {StoryObj} from '@storybook/react'
//
// import {LoginForm} from "@/components/auth/loginForm/loginForm.tsx";
//
// const meta = {
//     title: 'Auth/LoginForm',
//     component: LoginForm,
//     tags: ['autodocs'],
//     argTypes: {},
// }
//
// export default meta
// type Story = StoryObj<typeof meta>
//
//
// export const Primary: Story = {}