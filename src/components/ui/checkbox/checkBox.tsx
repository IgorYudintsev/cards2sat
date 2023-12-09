import {FC} from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import {clsx} from 'clsx'
import {CheckIcon} from '@/assets/icons/check.tsx'
import {Typography} from '@/components'

import s from './checkbox.module.scss'

export type CheckboxProps = {
    className?: string
    checked?: boolean
    onChange?: (checked: boolean) => void
    disabled?: boolean
    required?: boolean
    label?: string
    id?: string
    position?: 'left'
}

export const Checkbox: FC<CheckboxProps> = ({
                                                checked,
                                                onChange,
                                                position,
                                                disabled,
                                                required,
                                                label,
                                                id,
                                                className,
                                            }) => {
    const classNames = {
        container: clsx(s.container, className),
        buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled, position === 'left' && s.left),
        root: s.root,
        indicator: s.indicator,
        label: clsx(s.label, disabled && s.disabled),
    }


    return (
        <div className={classNames.container}>
            <LabelRadix.Root asChild>
                <Typography variant="body2" className={classNames.label} as={'label'}>
                    <div className={classNames.buttonWrapper}>
                        <CheckboxRadix.Root
                            className={classNames.root}
                            checked={checked}
                            onCheckedChange={onChange}
                            disabled={disabled}
                            required={required}
                            id={id}

                        >
                            {checked && (
                                <CheckboxRadix.Indicator className={classNames.indicator} forceMount>
                                    <CheckIcon/>
                                </CheckboxRadix.Indicator>
                            )}
                        </CheckboxRadix.Root>
                    </div>
                    {label}
                </Typography>
            </LabelRadix.Root>
        </div>
    )
}


//------------------------------------------------------------------------------------------
// import React from "react";
// import s from "@/components/ui/checkbox/checkbox.module.scss";
// import {CheckIcon} from "@radix-ui/react-icons";
// import {Control, Controller} from "react-hook-form";
// import {FormValues} from "@/components/auth/loginForm/loginForm.tsx";
// import * as Checkbox from '@radix-ui/react-checkbox';
//
// export type CheckboxProps = {
//     control?: Control<FormValues>;
//     name: "email" | "password" | "checkBox";
//     className?: string;
//     disabled?: boolean;
//    };
//
//
// export const CheckBox: React.FC<CheckboxProps> = (props) => {
//     const {control, name, className, disabled, ...rest} = props;
//
//     return (
//         <div className={s.circle}>
//             <Controller
//                 name={name}
//                 control={control}
//                 defaultValue={false}
//                 render={({field}) => (
//                     <Checkbox.Root
//                         {...field}
//                         className={`${s.main} ${className}`}
//                         disabled={disabled}
//                         checked={!!field.value}
//                         onChange={field.onChange}
//                         onCheckedChange={field.onChange}
//                         value={field.value.toString()}
//                                  >
//                         <Checkbox.Indicator>
//                             <CheckIcon/>
//                         </Checkbox.Indicator>
//                     </Checkbox.Root>
//                 )}
//             />
//         </div>
//     );
// };




