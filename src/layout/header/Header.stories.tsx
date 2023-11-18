
import {Meta, StoryObj} from '@storybook/react';
import {Header} from './Header';


const meta = {
    title: 'layout/Header',
    component: Header,
    tags: ['autodocs'],
} satisfies Meta



export default meta

type Story = StoryObj<typeof meta>


export const Default: Story = {
    args: {
        logined: true
        },
}

