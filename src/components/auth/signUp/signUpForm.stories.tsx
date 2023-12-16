import type {Meta, StoryObj} from '@storybook/react'
import {SignUpForm} from "@/components/auth/signUp/signUpForm.tsx";


const meta = {
    title: 'Auth/SignUpForm',
    component: SignUpForm,
    argTypes: {
        onSubmit: {action: 'submitted'},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SignUpForm>

export default meta
type Story = StoryObj<typeof meta>


export const Primary: Story = {}