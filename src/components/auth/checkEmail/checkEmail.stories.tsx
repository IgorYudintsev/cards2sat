import {CheckEmail} from "@/components/auth/checkEmail/checkEmail";
import {StoryObj} from "@storybook/react";

const meta = {
  title: 'Auth/CheckEmail',
  component: CheckEmail,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    email: 'kakvospitat@gmail.com',
  },
}
