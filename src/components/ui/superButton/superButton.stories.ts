import type {StoryObj} from '@storybook/react'
import {SuperButton} from "@/components/ui/superButton/superButton";

const meta = {
    title: 'Components/SuperButton',
    component: SuperButton,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['primary','primaryIcon','PrimaryIconGrey', 'secondary', 'tertiary', 'link'],
            control: { type: 'radio' },
        },
    },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Button',
        disabled: false,
           },
}

export const PrimaryIcon: Story = {
    args: {
        variant: 'primaryIcon',
        children: 'Primary Icon',
        disabled: false,
        withIcon:true
    },
}

export const PrimaryIconGrey: Story = {
    args: {
        variant: 'primaryIcon',
        children: 'primary Icon',
        disabled: false,
        withIcon:true
    },
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary Button',
        disabled: false,
        withIcon:true
    },
}
export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
        children: 'Tertiary Button',
        disabled: false,
    },
}
export const Link: Story = {
    args: {
        variant: 'link',
        children: 'Tertiary Button',
        disabled: false,
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

export const AsLink: Story = {
    args: {
        variant: 'primary',
        children: 'Link that looks like a button',
        as: 'a',
        href: 'https://www.google.com',
    },
}