import type {StoryObj} from '@storybook/react'

import {LoginForm} from "@/components/auth/loginForm/loginForm.tsx";

const meta = {
    title: 'Auth/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}