import React from "react";
import s from "@/components/ui/checkbox/checkbox.module.scss";
import {CheckIcon} from "@radix-ui/react-icons";
import {Control, Controller} from "react-hook-form";
import {FormValues} from "@/components/auth/loginForm/loginForm.tsx";
import * as Checkbox from '@radix-ui/react-checkbox';

export type CheckboxProps = {
    control?: Control<FormValues>;
    name: "email" | "password" | "checkBox";
    className?: string;
    disabled?: boolean;
   };


export const CheckBox: React.FC<CheckboxProps> = (props) => {
    const {control, name, className, disabled, ...rest} = props;

    return (
        <div className={s.circle}>
            <Controller
                name={name}
                control={control}
                defaultValue={false}
                render={({field}) => (
                    <Checkbox.Root
                        {...field}
                        className={`${s.main} ${className}`}
                        disabled={disabled}
                        checked={!!field.value}
                        onChange={field.onChange}
                        onCheckedChange={field.onChange}
                        value={field.value.toString()}
                                 >
                        <Checkbox.Indicator>
                            <CheckIcon/>
                        </Checkbox.Indicator>
                    </Checkbox.Root>
                )}
            />
        </div>
    );
};




