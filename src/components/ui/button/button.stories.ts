import type { Meta, StoryObj } from '@storybook/react'
// import { Button } from '../../../components/ui/Button'
import { Button } from '@/components/ui/index'

const meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'tertiary', 'link'],
            control: { type: 'radio' },
        },
    },
} satisfies Meta<typeof Button>

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
        children: 'Tertiary',
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

