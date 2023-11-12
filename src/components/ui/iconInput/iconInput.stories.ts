import {Meta, StoryObj} from "@storybook/react";
import {IconInput, IconInputProps} from "@/components/ui/iconInput/iconInput.tsx";


const meta: Meta<IconInputProps>={
    title: 'Components/IconInput',
    component: IconInput,
    tags: ['auto-docs'],
    argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const SearchInput: Story = {
    args: {
        disabled: false,
        icon: "search"
    },
}

export const PasswordInput: Story = {
    args: {
        disabled: false,
        icon: "password"
    },
}