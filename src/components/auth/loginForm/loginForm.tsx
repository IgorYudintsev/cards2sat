import {useForm} from "react-hook-form";
import {SuperInput} from "@/components/ui/superInput";
import {SuperButton} from "@/components/ui/superButton";
import {CheckBox} from "@/components";

export type FormValues = {
    email: string
    password: string
    checkBox:boolean
}
export const LoginForm = () => {

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<FormValues>();


    const onSubmit = (data: FormValues) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <SuperInput   control={control}  name="email" icon={"classic"} disabled={false} label={'email'}/>
            <SuperInput   control={control}   name="password" icon={"password"} disabled={false}  label={'password'}/>
            <CheckBox control={control} name="checkBox" />
            <SuperButton type="submit">Submit</SuperButton>
        </form>
    );
};

