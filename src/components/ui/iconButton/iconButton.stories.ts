import type { Meta, StoryObj } from '@storybook/react'
// import { Button } from '../../../components/ui/Button'

import {IconButton} from "@/components/ui/iconButton/iconButton.tsx";

const meta = {
    title: 'Components/IconButton',
    component: IconButton,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'tertiary', 'link'],
            control: { type: 'radio' },
        },
    },
} satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof meta>


export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Button',
        disabled: false,
    },
}

export const PrimaryGray: Story = {
    args: {
        variant: 'primaryGray',
        children: 'PrimaryGr But',
        disabled: false,
    },
}


