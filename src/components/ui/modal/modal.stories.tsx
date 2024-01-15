import { Meta, StoryObj } from '@storybook/react'
import { Modal, ModalFooter } from '.'
import {Button} from "@/components";

const meta = {
    title: 'Components/Modal',
    component: Modal,
  } satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        open: true,
        title: 'Edit photo',
        //onSubmit: {action: 'submitted'},
    },
}

export const FooterButton = {
    render: () => {
        return (
            <ModalFooter>
                <Button variant={'primary'}>Button primary</Button>
                <Button variant={'secondary'}>Button secondary</Button>

            </ModalFooter>
        )
    },
}