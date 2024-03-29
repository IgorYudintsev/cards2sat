import type {Meta, StoryObj} from '@storybook/react'
import {DropDownMenu, DropDownMenuIcon} from './drop-down-menu'
import {Typography} from "@/components";
import {Avatar} from "@/components/ui/avatar";
import s from './drop-down-menu.module.scss'
import {PersonOutlineSvg} from "@/assets/icons/PersonOutlineSvg.tsx";
import {LogoutSvg} from "@/assets/icons";


const meta = {
    title: 'Components/DropDownMenu',
    component: DropDownMenu,
    // argTypes: {
    //     onSubmit: {action: 'submitted'},
    // },
    tags: ['autodocs'],
} satisfies Meta<typeof DropDownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: null,
        align: 'start'
    },
    render: () => {
            const srcImg='https://avatars.githubusercontent.com/u/45824373?s=400&u=4c710a41dc877dcc3a2a9ddf5aecdfdc0fa1786d&v=4'

        return (
            <div className={s.PrimaryStyles}>
                <DropDownMenu trigger={<Avatar name="Igor" src={srcImg}/>}>
                    <DropDownMenuIcon onSelect={() => {}}>
                        <div className={s.WrapperForDropDownMenuIconStyles}>
                            <Avatar name="Igor" src={srcImg} />
                            <div className={s.WrapperForTypographyStyles}>
                                <Typography variant="subtitle2" as="span">
                                    Igor
                                </Typography>
                                <Typography variant="caption" as="span">
                                    dollarselephant@gmail.com
                                </Typography>
                            </div>
                        </div>
                    </DropDownMenuIcon>
                    <DropDownMenuIcon onSelect={() => {}} icon={<PersonOutlineSvg/>}>
                        My Profile
                    </DropDownMenuIcon>
                    <DropDownMenuIcon icon={<LogoutSvg />} >Sign Out</DropDownMenuIcon>
                </DropDownMenu>
            </div>
        );
    },
};






//--------------------------------------------------
//
// import type { Meta, StoryObj } from '@storybook/react'
//
// import { LogoutSvg } from '@/assets/icons'
// import { PersonOutlineSvg } from '../../../assets/icons/PersonOutlineSvg'
// import { Avatar } from '../avatar'
// //import Button from '../button/button'
// import { Typography } from '../Typography'
//
// import { DropDownMenu, DropDownMenuIcon } from './drop-down-menu'
// import {Button} from "@/components";
//
// const meta = {
//     title: 'Components/DropDownMenu',
//     component: DropDownMenu,
//     tags: ['autodocs'],
// } satisfies Meta<typeof DropDownMenu>
//
// export default meta
// // type Story = StoryObj<typeof meta>
//
// export const Variants = {
//     render: () => {
//         return (
//             <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
//                 <DropDownMenu trigger={<Button>Show me</Button>}>
//                     <DropDownMenuIcon onSelect={() => {}}>
//                         <div
//                             style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem', alignItems: 'center' }}
//                         >
//                             <Avatar name="Ivan" />
//                             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//                                 <Typography variant="subtitle2" as="span">
//                                     Ivan
//                                 </Typography>
//                                 <Typography variant="caption" as="span">
//                                     j&johnson@gmail.com
//                                 </Typography>
//                             </div>
//                         </div>
//                     </DropDownMenuIcon>
//                     <DropDownMenuIcon onSelect={() => {}} icon={<PersonOutlineSvg />}>
//                         My Profile
//                     </DropDownMenuIcon>
//                     <DropDownMenuIcon icon={<LogoutSvg />}>Sign Out</DropDownMenuIcon>
//                 </DropDownMenu>
//                 <DropDownMenu trigger={<Avatar name="Ivan" />}>
//                     <DropDownMenuIcon onSelect={() => {}}>
//                         <div
//                             style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem', alignItems: 'center' }}
//                         >
//                             <Avatar name="Ivan" />
//                             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//                                 <Typography variant="subtitle2" as="span">
//                                     Ivan
//                                 </Typography>
//                                 <Typography variant="caption" as="span">
//                                     j&johnson@gmail.com
//                                 </Typography>
//                             </div>
//                         </div>
//                     </DropDownMenuIcon>
//                     <DropDownMenuIcon onSelect={() => {}} icon={<PersonOutlineSvg />}>
//                         My Profile
//                     </DropDownMenuIcon>
//                     <DropDownMenuIcon icon={<LogoutSvg />}>Sign Out</DropDownMenuIcon>
//                 </DropDownMenu>
//             </div>
//         )
//     },
// }
//----------------------------------------------------------------------------------

// import type {Meta, StoryObj} from '@storybook/react'
// import {DropDownMenu} from "@/components/ui/drop-down-menu/drop-down-menu.tsx";
//
//
// const meta = {
//     title: 'Components/DropDownMenu',
//     component: DropDownMenu,
//     argTypes: {
//         onSubmit: {action: 'submitted'},
//     },
//     tags: ['autodocs'],
// } satisfies Meta<typeof DropDownMenu>
//
// export default meta
// type Story = StoryObj<typeof meta>
//
//
// export const Primary: Story = {



