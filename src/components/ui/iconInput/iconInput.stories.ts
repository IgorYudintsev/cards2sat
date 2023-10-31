import {Input} from "@/components/ui/input";
import {Meta, StoryObj} from "@storybook/react";
import {IconInput} from "@/components/ui/iconInput/iconInput.tsx";

const meta = {
    title: 'Components/IconInput',
    component: IconInput,
    tags: ['auto-docs'],
    argTypes: {},
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const ClassicInput: Story = {
    args: {
        disabled: false,
    },
}