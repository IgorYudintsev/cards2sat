import {FieldValues, useController, UseControllerProps} from "react-hook-form";
import {Checkbox, CheckboxProps} from "@/components";


//export type ControlledCheckboxProps= UseControllerProps<T> & CheckboxProps //самое простое
// export type ControlledCheckboxProps<T extends FieldValues> =
//     UseControllerProps<T> & Omit<CheckboxProps, 'onChange' | 'value' | 'id'>


export type ControlledCheckboxProps<T extends FieldValues> = Omit<
    UseControllerProps<T>,
    'rules' | 'defaultValue' | 'disabled'
> &
    Omit<CheckboxProps, 'checked' | 'onValueChange'>;

export const ControlledCheckbox = <T extends FieldValues>({
                                                              control,
                                                              name,
                                                              shouldUnregister,
                                                              disabled,
                                                              ...checkboxProps
                                                          }: ControlledCheckboxProps<T>) => {
    const {
        field: {value, onChange},
    } = useController({
        name,
        control,
        shouldUnregister,
        disabled
    })
    return <Checkbox checked={value} onChange={onChange}  {...checkboxProps}/>
};

//---------------------------------------------------------------------------------------------
// import {useController} from "react-hook-form";
// import React from "react";
// import {Checkbox, CheckboxProps} from "@/components";
//
// type Props={
//     control:any,
//     name:string
// }& CheckboxProps
// export const ControlledCheckbox:React.FC<Props> = ({control,name, ...rest}) => {
//     const {
//         field: {value, onChange},
//     } = useController({
//         name: 'rememberMe',
//         control,
//     })
//     return  <Checkbox checked={value}  onChange={onChange} {...rest}/>
// };