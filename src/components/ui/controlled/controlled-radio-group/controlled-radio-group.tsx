import {RadioGroup, RadioGroupProps} from "@/components/ui/radio-group";
import {FieldValues, useController, UseControllerProps} from "react-hook-form";

type ControlledRadioGroupProps<T extends FieldValues> = UseControllerProps<T> &
    Omit<RadioGroupProps, 'onValueChange' | 'name' | 'defaultValue'>

export const ControlledRadioGroup = <T extends FieldValues>({
                                                           control,
                                                           name,
                                                           defaultValue,
                                                           rules,
                                                           shouldUnregister,
                                                           ...radioGroupProps
                                                       }: ControlledRadioGroupProps<T>) => {
    const {
        field: { onChange },
    } = useController({
        control,
        name,
        defaultValue,
        rules,
        shouldUnregister,
    })

    return (
        <RadioGroup
            defaultValue={defaultValue}
            onValueChange={onChange}
            id={name}
            {...radioGroupProps}
        />

    )
}