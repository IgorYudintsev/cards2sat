import type {StoryObj} from '@storybook/react'
import {Meta} from "@storybook/react";
import {CreatePassword} from "@/components/auth/createPassword/createPassword";

const meta = {
  title: 'Auth/CreatePasswordForm',
  component: CreatePassword,
  // argTypes: {
  //   onSubmit: {action: 'submitted'},
  // },
  tags: ['autodocs'],
}satisfies Meta<typeof CreatePassword>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
