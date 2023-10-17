// import React from 'react';
import '@radix-ui/themes/styles.css';
import * as Checkbox from '@radix-ui/react-checkbox';
import React from "react";
import s from "@/components/ui/checkbox/checkbox.module.scss";
import {CheckIcon} from "@radix-ui/react-icons";


export type CheckboxProps = {
    className?: string
    disabled?: boolean
    checked?:boolean
}
export const CheckBox: React.FC<CheckboxProps> = (props) => {
    const {className,disabled, ...rest} = props

    const [checked, setChecked] = React.useState(false);
    const handleCheckedChange = () => {
        setChecked(!checked);
    };

    return (
        <div className={s.circle}>
            <Checkbox.Root disabled={disabled} className={`${s.main}  ${className}`} {...rest} checked={checked}
                           onCheckedChange={handleCheckedChange}>
                <Checkbox.Indicator>
                    <CheckIcon/>
                </Checkbox.Indicator>
            </Checkbox.Root>
        </div>
    );
};
