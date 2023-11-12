import {Meta, StoryObj} from "@storybook/react";
import {InputProps, SuperInput} from "@/components/ui/superInput/superInput.tsx";

const meta = {
    title: "Components/SuperInput",
    component: SuperInput,
    tags: ['auto-docs'],
    argTypes: {},
    } satisfies Meta<InputProps>

 export default meta

type Story = StoryObj<typeof meta>


export const ClassicInput: Story = {
    args: {
        icon: "classic",
        disabled: false,
    },
}

export const PasswordInput: Story = {
    args: {
        icon: "password",
        disabled: false,
    },
}

export const SearchInput: Story = {
    args: {
        icon: "search",
        disabled: false,
    },
}
