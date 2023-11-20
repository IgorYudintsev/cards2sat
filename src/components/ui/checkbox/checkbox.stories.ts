



//-------------------------------------------------
import {Meta, StoryObj} from "@storybook/react";
import {CheckBox} from '@/components/ui/index.ts'

const meta = {
    title: 'Components/CheckBox',
    component: CheckBox,
    tags: ['auto-docs'],
    argTypes: {},
} satisfies Meta<typeof CheckBox>

export default meta

type Story = StoryObj<typeof meta>

export const ClassicCheckBox: Story = {
    args: {
        checked: true,
        disabled: false,
    },
}