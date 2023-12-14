import {TextField, TextFieldProps} from "@/components/ui/textField";
import {FieldValues, useController, UseControllerProps} from "react-hook-form";

export type ControlledTextFieldProps<T extends FieldValues> = UseControllerProps<T> &
    Omit<TextFieldProps, 'value' | 'onValueChange' | 'onChange' | 'id'>

const ControlledTextField = <T extends FieldValues>({
                                                        name,
                                                        control,
                                                        label,
                                                        type,
                                                        errorMessage,
                                                        rules,
                                                        defaultValue,
                                                        shouldUnregister,
                                                        ...checkboxProps
                                                    }: ControlledTextFieldProps<T>) => {

    const {
        field: {value, onChange},
    } = useController({
        control,
        name,
        defaultValue,
        rules,
        shouldUnregister,
    })
    return (
        <TextField name={name}
                   value={value}
                   label={label}
                   errorMessage={errorMessage}
                   type={type}
                   {...checkboxProps}
                   onChange={onChange}
        />
    );
};

export default ControlledTextField;

