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
    },
}

export const H1: Story = {
    args: {
        variant: 'h1',
    },
}

//
// export const Secondary: Story = {
//     args: {
//         variant: 'secondary',
//         children: 'Secondary Button',
//         disabled: false,
//     },
// }
// export const Tertiary: Story = {
//     args: {
//         variant: 'tertiary',
//         children: 'Tertiary Button',
//         disabled: false,
//     },
// }
// export const Link: Story = {
//     args: {
//         variant: 'link',
//         children: 'Tertiary Button',
//         disabled: false,
//     },
// }
//
// export const FullWidth: Story = {
//     args: {
//         variant: 'primary',
//         children: 'Full Width Button',
//         disabled: false,
//         fullWidth: true,
//     },
// }