import {useController} from "react-hook-form";
import React from "react";
import {Checkbox, CheckboxProps} from "@/components";

type Props={
    control:any,
    name:string
}& CheckboxProps
export const ControlledCheckbox:React.FC<Props> = ({control,name, ...rest}) => {
    const {
        field: {value, onChange},
    } = useController({
        name: 'rememberMe',
        control,
    })
    return  <Checkbox checked={value}  onChange={onChange} {...rest}/>
};

