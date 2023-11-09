import type { Meta, StoryObj } from '@storybook/react'
// import { Button } from '../../../components/ui/Button'

import {IconButton} from "@/components/ui/iconButton/iconButton.tsx";

const meta = {
    title: 'Components/IconButton',
    component: IconButton,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['primaryIcon' , 'primaryGreyIcon'],
            control: { type: 'radio' },
        },
    },
} satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof meta>


export const PrimaryIcon: Story = {
    args: {
        variant: 'primaryIcon',
        children: 'Primary Button',
        disabled: false,
    },
}

export const PrimaryGreyIcon: Story = {
    args: {
        variant: 'primaryGreyIcon',
        children: 'Primary Grey Button',
        disabled: false,
    },
}


