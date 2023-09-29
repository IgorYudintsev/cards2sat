import type {Meta, StoryObj} from '@storybook/react'
import {Typography} from "@/components/ui/typography/typography";


const meta = {
    title: 'Components/Typography',
    component: Typography,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['large', 'h1'],
            control: {type: 'radio'},
        },
    },
} as Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
    args: {
        variant: 'large',
        children: 'Typography large'
    },
}

export const H1: Story = {
    args: {
        variant: 'h1',
        children: 'Typography h1'
    },
}

export const H2: Story = {
    args: {
        variant: 'h2',
        children: 'Typography h2'
    },
}

export const H3: Story = {
    args: {
        variant: 'h3',
        children: 'Typography h3'
    },
}

export const Body1: Story = {
    args: {
        variant: 'body1',
        children: 'Typography body1'
    },
}

export const Subtitle1: Story = {
    args: {
        variant: 'subtitle1',
        children: 'Typography subtitle1'
    },
}

export const Body2: Story = {
    args: {
        variant: 'body2',
        children: 'Typography body2'
    },
}

export const Subtitle2: Story = {
    args: {
        variant: 'subtitle2',
        children: 'Typography subtitle2'
    },
}

export const Caption: Story = {
    args: {
        variant: 'caption',
        children: 'Typography caption'
    },
}

export const Overline: Story = {
    args: {
        variant: 'overline',
        children: 'Typography overline'
    },
}

export const Link1: Story = {
    args: {
        variant: 'link1',
        children: 'Typography link1'
    },
}

export const Link2: Story = {
    args: {
        variant: 'link2',
        children: 'Typography link2'
    },
}