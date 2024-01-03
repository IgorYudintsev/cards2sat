import {ReactNode, useState, FC, CSSProperties} from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'


import style from './drop-down-menu.module.scss'
import {Typography} from "@/components";

export type DropdownProps = {
    children: ReactNode
    align?: 'start' | 'center' | 'end'
    trigger?: ReactNode
    className?: string
    style?: CSSProperties
} & DropdownMenu.DropdownMenuProps

export const DropDownMenu: FC<DropdownProps> = ({
                                                    children,
                                                    trigger,
                                                    // align,
                                                    // className,
                                                    // ...restProps
                                                }) => {
    const [open, setOpen] = useState(false)

    return (
        <DropdownMenu.Root onOpenChange={setOpen} modal>
            <DropdownMenu.Trigger asChild>
                <div className={style.DropdownMenuTrigger}>
                    {trigger}
                    {open && <div className={style.DropdownMenuArrow3}></div>}
                </div>
            </DropdownMenu.Trigger>
            {/* forceMount Useful when controlling animation */}

            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className={style.DropdownMenuContent}
                    align="start"
                    sideOffset={5}
                    hideWhenDetached
                >
                    {children}
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}

type DropDownMenuIconProps = {
    children: ReactNode
    icon?: ReactNode
} & DropdownMenu.DropdownMenuItemProps

export const DropDownMenuIcon = ({
                                     //className,
                                     onSelect,
                                     disabled,
                                     children,
                                     icon,
                                     ...restProps
                                 }: DropDownMenuIconProps) => {

    return (
        <>
            <DropdownMenu.Item
                onSelect={onSelect}
                className={style.DropdownMenuItem}
                disabled={disabled}
                {...restProps}
            >
                {icon}
                <Typography variant="subtitle2" style={{margin: 0}}>
                    {children}
                </Typography>
            </DropdownMenu.Item>
        </>
    )
}


//----------------------------------------------------------------------------

// import React, {useState} from 'react';
// import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
// import {
//     HamburgerMenuIcon,
//     DotFilledIcon,
//     CheckIcon,
//     ChevronRightIcon,
// } from '@radix-ui/react-icons';
// //import './styles.css';
//
// export const DropDownMenu = () => {
//     const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
//     const [urlsChecked, setUrlsChecked] = React.useState(false);
//     const [person, setPerson] = React.useState('pedro');
//
//     const [open, setOpen] = useState(false)
//
//     return (
//
//
//         <DropdownMenu.Root onOpenChange={setOpen} modal>
//             <DropdownMenu.Trigger asChild>
//                 <button className="IconButton" aria-label="Customise options">
//                     <HamburgerMenuIcon />
//                 </button>
//             </DropdownMenu.Trigger>
//
//             <DropdownMenu.Portal>
//                 <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
//                     <DropdownMenu.Item className="DropdownMenuItem">
//                         New Tab <div className="RightSlot">⌘+T</div>
//                     </DropdownMenu.Item>
//                     <DropdownMenu.Item className="DropdownMenuItem">
//                         New Window <div className="RightSlot">⌘+N</div>
//                     </DropdownMenu.Item>
//                     <DropdownMenu.Item className="DropdownMenuItem" disabled>
//                         New Private Window <div className="RightSlot">⇧+⌘+N</div>
//                     </DropdownMenu.Item>
//                     <DropdownMenu.Sub>
//                         <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
//                             More Tools
//                             <div className="RightSlot">
//                                 <ChevronRightIcon />
//                             </div>
//                         </DropdownMenu.SubTrigger>
//                         <DropdownMenu.Portal>
//                             <DropdownMenu.SubContent
//                                 className="DropdownMenuSubContent"
//                                 sideOffset={2}
//                                 alignOffset={-5}
//                             >
//                                 <DropdownMenu.Item className="DropdownMenuItem">
//                                     Save Page As… <div className="RightSlot">⌘+S</div>
//                                 </DropdownMenu.Item>
//                                 <DropdownMenu.Item className="DropdownMenuItem">Create Shortcut…</DropdownMenu.Item>
//                                 <DropdownMenu.Item className="DropdownMenuItem">Name Window…</DropdownMenu.Item>
//                                 <DropdownMenu.Separator className="DropdownMenu.Separator" />
//                                 <DropdownMenu.Item className="DropdownMenuItem">Developer Tools</DropdownMenu.Item>
//                             </DropdownMenu.SubContent>
//                         </DropdownMenu.Portal>
//                     </DropdownMenu.Sub>
//
//                     <DropdownMenu.Separator className="DropdownMenuSeparator" />
//
//                     <DropdownMenu.CheckboxItem
//                         className="DropdownMenuCheckboxItem"
//                         checked={bookmarksChecked}
//                         onCheckedChange={setBookmarksChecked}
//                     >
//                         <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
//                             <CheckIcon />
//                         </DropdownMenu.ItemIndicator>
//                         Show Bookmarks <div className="RightSlot">⌘+B</div>
//                     </DropdownMenu.CheckboxItem>
//                     <DropdownMenu.CheckboxItem
//                         className="DropdownMenuCheckboxItem"
//                         checked={urlsChecked}
//                         onCheckedChange={setUrlsChecked}
//                     >
//                         <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
//                             <CheckIcon />
//                         </DropdownMenu.ItemIndicator>
//                         Show Full URLs
//                     </DropdownMenu.CheckboxItem>
//
//                     <DropdownMenu.Separator className="DropdownMenuSeparator" />
//
//                     <DropdownMenu.Label className="DropdownMenuLabel">People</DropdownMenu.Label>
//                     <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
//                         <DropdownMenu.RadioItem className="DropdownMenuRadioItem" value="pedro">
//                             <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
//                                 <DotFilledIcon />
//                             </DropdownMenu.ItemIndicator>
//                             Pedro Duarte
//                         </DropdownMenu.RadioItem>
//                         <DropdownMenu.RadioItem className="DropdownMenuRadioItem" value="colm">
//                             <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
//                                 <DotFilledIcon />
//                             </DropdownMenu.ItemIndicator>
//                             Colm Tuite
//                         </DropdownMenu.RadioItem>
//                     </DropdownMenu.RadioGroup>
//
//                     <DropdownMenu.Arrow className="DropdownMenuArrow" />
//                 </DropdownMenu.Content>
//             </DropdownMenu.Portal>
//         </DropdownMenu.Root>
//     );
// };

