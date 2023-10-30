import s from "@/components/ui/input/input.module.scss";
import {useState} from "react";


export type InputProps = {
    className?: string
    disabled?: boolean
}

export const Input: React.FC<InputProps> = (props) => {
    const {className, disabled, ...rest} = props

    const [error, setError] = useState(true)

    const styles = `
    ${s.main}
    ${error ? s.colorError : s.colorDefault}
        `


    return (
        <input
            disabled={disabled}
            className={` ${className} ${styles}`}

            {...rest}

        />
    )
}