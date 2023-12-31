import * as Tabs from '@radix-ui/react-tabs'
import clsx from 'clsx'



import style from './tab-switcher.module.scss'
import {Typography} from "@/components";

export type SwitchButton = {
    label: string
    value: string
}

type TabSwitherProps = {
    buttons: SwitchButton[]
    defaultValue?: string
    disabled?: boolean
    //   onValueChange: (value: string) => void
} & Tabs.TabsProps &
    React.RefAttributes<HTMLDivElement>

export const TabSwither = ({
                               buttons,
                               disabled,
                               defaultValue,
                               onValueChange,
                               className,
                               ref,
                           }: TabSwitherProps) => {
    const onChange = (value: string) => {
        onValueChange?.(value)
    }

    return (
        <Tabs.Root
            onValueChange={onChange}
            className={clsx(style.TabsRoot, className)}
            defaultValue={defaultValue}
            ref={ref}
        >
            <Tabs.List className={style['TabsList']} aria-label="Choose option">
                {buttons.map(button => (
                    <Tabs.Trigger
                        key={button.value}
                        disabled={disabled}
                        className={style['TabsTrigger']}
                        value={button.value}
                    >
                        <Typography variant="body1">{button.label}</Typography>
                    </Tabs.Trigger>
                ))}
            </Tabs.List>
        </Tabs.Root>
    )
}
