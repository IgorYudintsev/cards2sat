import {TextField, TextFieldProps} from "@/components/ui/textField";
import {FieldValues, useController, UseControllerProps} from "react-hook-form";



export type ControlledTextFieldProps<T extends FieldValues> = UseControllerProps<T> &
    Omit<TextFieldProps, 'value' | 'onValueChange' | 'onChange' | 'id'>
export const ControlledTextField = <T extends FieldValues>({
                                                               control,
                                                               name,
                                                               defaultValue,
                                                               rules,
                                                               shouldUnregister,
                                                               errorMessage,
                                                               ...inputProps
                                                           }: ControlledTextFieldProps<T>) => {
    const {
        field: { value, onChange },
    } = useController({
        control,
        name,
        defaultValue,
        rules,
        shouldUnregister,
    })

    return <TextField value={value} onChange={onChange} id={name} errorMessage={errorMessage} {...inputProps} />
}



