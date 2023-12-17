import type {StoryObj} from '@storybook/react'
import {CreatePassword} from "@/components/auth/createPassword/createPassword";

const meta = {
  title: 'Auth/CreatePasswordForm',
  component: CreatePassword,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
