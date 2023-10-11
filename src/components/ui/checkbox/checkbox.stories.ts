import {Meta, StoryObj} from "@storybook/react";
import {CheckBox} from '@/components/ui/index.ts'

const meta = {
    title: 'Components/CheckBox',
    component: CheckBox,
    tags: ['auto-docs'],
    argTypes: {
        variant: {
            options: [],
            control: { type: 'radio' },
        },
    },
} satisfies Meta<typeof CheckBox>

export default meta

type Story = StoryObj<typeof meta>

export const ClassicCheckBox: Story = {

}