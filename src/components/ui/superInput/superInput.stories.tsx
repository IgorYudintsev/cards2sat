
import { Meta, Story } from "@storybook/react";
import { InputProps, SuperInput } from "@/components/ui/superInput/superInput.tsx";
import { useForm, Control } from "react-hook-form";
import {FormValues} from "@/components/auth/loginForm/loginForm.tsx";

const meta: Meta<InputProps> = {
    title: "Components/SuperInput",
    component: SuperInput,
    tags: ["auto-docs"],
    argTypes: {},
};

export default meta;

type StoryArgs = {
    control: Control<FormValues>;
};

type StoryType = Story<StoryArgs>;

export const ClassicInput: StoryType = (args) => {
    const {
        control,
    } = useForm<FormValues>();

    return <SuperInput control={control} name="email" icon="classic" disabled={false} />;
};

export const PasswordInput: StoryType = (args) => {
    const {
        control,
    } = useForm<FormValues>();

    return <SuperInput control={control} name="password" icon="password" disabled={false} />;
};

export const SearchInput: StoryType = (args) => {
    const {
        control,
    } = useForm<FormValues>();

    return <SuperInput control={control} name="search" icon="search" disabled={false} />;
};

//---------------------------------------------
// import {Meta, StoryObj} from "@storybook/react";
// import {InputProps, SuperInput} from "@/components/ui/superInput/superInput.tsx";
// import { useForm, Control } from "react-hook-form";
// import {FormValues} from "@/components/auth/loginForm/loginForm.tsx";
//
// const meta = {
//     title: "Components/SuperInput",
//     component: SuperInput,
//     tags: ['auto-docs'],
//     argTypes: {},
//     } satisfies Meta<InputProps>
//
//  export default meta
//
// type Story = StoryObj<typeof meta>
//
// type StoryArgs = {
//     control: Control<FormValues>;
// };
//
// export const ClassicInput: Story<StoryArgs> = (args) => {
//     const {
//         control,
//     } = useForm<FormValues>();
//
//     return <SuperInput control={control} name="email" icon="classic" disabled={false} />;
// };
//
// // export const ClassicInput: Story = {
// //
// //     args: {
// //         icon: "classic",
// //         disabled: false,
// //         name:'email',
// //         //control:'email'
// //     },
// // }
//
//
// export const PasswordInput: Story<StoryArgs> = (args) => {
//     const {
//         control,
//     } = useForm<FormValues>();
//
//     return <SuperInput control={control} name="password" icon="password" disabled={false} />;
// };
//
// // export const PasswordInput: Story = {
// //     args: {
// //         icon: "password",
// //         disabled: false,
// //         name:'password'
// //     },
// // }
//
// export const SearchInput: Story<StoryArgs> = (args) => {
//     const {
//         control,
//     } = useForm<FormValues>();
//
//     return <SuperInput control={control} name="search" icon="search" disabled={false} />;
// };
//
//
// // export const SearchInput: Story = {
// //     args: {
// //         icon: "search",
// //         disabled: false,
// //         name:'search'
// //     },
// // }
