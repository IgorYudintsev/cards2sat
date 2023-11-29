import type { Meta, StoryObj } from '@storybook/react'

import {TextField} from './textField.tsx'

const meta = {
    title: 'Components/TextField',
    component: TextField,
    tags: ['autodocs'],
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const TextFieldDefault: Story = {
    args: {
        label: 'Label',
        placeholder: 'write here',
        type: 'text',
    },
}
export const TextFieldPassword: Story = {
    args: {
        label: 'Label',
        placeholder: 'write here',
        type: 'password',
    },
}
export const TextFieldError: Story = {
    args: {
        errorMessage: 'error message',
        label: 'Label',
        placeholder: 'write here',
        type: 'text',
    },
}
export const TextFieldSearch: Story = {
    args: {
        label: 'Label',
        placeholder: 'Search',
        type: 'search',
    },
}