// import React from 'react';
import '@radix-ui/themes/styles.css';
import * as Checkbox from '@radix-ui/react-checkbox';
import React, {ComponentPropsWithoutRef, ElementType} from "react";
import s from "@/components/ui/checkbox/checkbox.module.scss";
import {CheckIcon} from "@radix-ui/react-icons";


export type CheckboxProps<T extends ElementType = 'button'> = {
    className?: string
} & ComponentPropsWithoutRef<T>
export const CheckBox: React.FC<CheckboxProps> = (props) => {
    const {className, ...rest} = props

    const [checked, setChecked] = React.useState(false);
    const handleCheckedChange = () => {
        setChecked(!checked);
    };

    return (
        <div className={s.circle}>
            <Checkbox.Root className={`${s.main}  ${className}`} {...rest} checked={checked}
                           onCheckedChange={handleCheckedChange}>
                <Checkbox.Indicator>
                    <CheckIcon/>
                </Checkbox.Indicator>
            </Checkbox.Root>
        </div>
    );
};

