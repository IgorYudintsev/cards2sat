import type {Meta, StoryObj} from '@storybook/react'
import {Avatar} from './avatar'

const meta = {
    title: 'Components/Avatar',
    component: Avatar,
    tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const NormalAvatar: Story = {
    args: {
        name: 'Igor',
        src: 'https://avatars.githubusercontent.com/u/45824373?s=400&u=4c710a41dc877dcc3a2a9ddf5aecdfdc0fa1786d&v=4',
    },
}

export const EmptyAvatar: Story = {
    args: {
        name: 'Igor',
    },
}
export const BrokenAvatar: Story = {
    args: {
        name: 'Igor',
        src: 'https://avat.com/agsdfgsdfghshjgksdjfg',
    },
}
