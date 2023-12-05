import type { Meta, StoryObj } from '@storybook/react'
import ava from '../../assets/ava/ava.jpg'
import { Header } from './Header'

const meta = {
    title: 'layouts/Header',
    component: Header,
    tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const HeaderLogIn: Story = {
    args: {
        isAuth: true,
        userInfo: {
            name: 'Igor',
            // avatarSrc: 'https://avatars.githubusercontent.com/u/95387501?v=4',
            avatarSrc: ava,
        },
        signOutClick: () => alert('callback SIGN OUT'),
    },
}

