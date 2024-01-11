import type { Meta, StoryObj } from '@storybook/react'

import { PersonalInfo } from '.'

const meta = {
    title: 'Profile/PersonalInfo',
    component: PersonalInfo,
    // argTypes: {
    //     onSubmit: {action: 'submitted'},
    // },
    tags: ['autodocs'],
} satisfies Meta<typeof PersonalInfo>

export default meta
type Story = StoryObj<typeof meta>

export const EmptyAvatar: Story = {
    args: {
        name: 'Igor Y',
        email: 'xxx@gmail.com',
    },
}
export const NormalAvatar: Story = {
    args: {
        name: 'Igor Y',
        email: 'xxx@gmail.com',
        avatarSrc: 'https://avatars.githubusercontent.com/u/45824373?s=400&u=4c710a41dc877dcc3a2a9ddf5aecdfdc0fa1786d&v=4',
    },
}
export const BrokenAvatar: Story = {
    args: {
        name: 'Igor Y',
        email: 'xxx@gmail.com',
        avatarSrc: 'https://avat.com/agsdfgsdfghshjgksdjfg',
    },
}
