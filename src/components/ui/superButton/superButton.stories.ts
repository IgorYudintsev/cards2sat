import type {StoryObj} from '@storybook/react'
import {SuperButton} from "@/components/ui/superButton/superButton";

const meta = {
    title: 'Components/SuperButton',
    component: SuperButton,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['primary', 'primaryIcon', 'primaryIconGrey', 'secondary', 'tertiary', 'link'],
            control: {type: 'radio'},
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
        withIcon: true
    },
}

export const PrimaryIconGrey: Story = {
    args: {
        variant: 'primaryIconGrey',
        children: 'Primary Icon Grey',
        disabled: false,
        withIcon: true
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

export const Link: Story = {
    args: {
        variant: 'link',
        children: 'Link Button',
        disabled: false,
        as: 'a',
        href:"http://htmlbook.ru/example/knob.html"
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