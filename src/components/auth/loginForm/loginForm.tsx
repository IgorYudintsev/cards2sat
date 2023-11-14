import {useForm} from "react-hook-form";
import {SuperInput} from "@/components/ui/superInput";
import {SuperButton} from "@/components/ui/superButton";

type FormValues = {
    email: string
    password: string
}
export const LoginForm = () => {
    const { register, handleSubmit } = useForm<FormValues>()

    const onSubmit = (data: FormValues) => {
        console.log(data)
    }
    return (
        <div>

            <SuperInput    icon={"classic"} disabled={false}/>
            <SuperInput    icon={"password"} disabled={false}/>
                     <SuperButton/>
        </div>
    );
};

