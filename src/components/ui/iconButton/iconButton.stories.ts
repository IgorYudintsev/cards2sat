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

export const AsLink: Story = {
    args: {
        variant: 'primary',
        children: 'Link that looks like a button',
        as: 'a',
        href:"http://htmlbook.ru/example/knob.html"
    },
}

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Button',
        disabled: false,
    },
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary Button',
        disabled: false,
    },
}

export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
        children: 'T',
        disabled: false,
    },
}

export const Link: Story = {
    args: {
        variant: 'link',
        children: 'link Button',
        disabled: false,
        as: 'a',
        href:"http://htmlbook.ru/example/knob.html"
    },
}

export const FullWidth: Story = {
    args: {
        variant: 'primary',
        children: 'Full Width Button',
        disabled: false,
        fullWidth: true,
    },
}

