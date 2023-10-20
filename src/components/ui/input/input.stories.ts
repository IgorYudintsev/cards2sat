import {Meta, StoryObj} from "@storybook/react";
import {Input} from "@/components/ui/input/input.tsx";

const meta = {
    title: 'Components/Input',
    component: Input,
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