import {useState} from "react";
import s from "@/components/ui/input/input.module.scss";
import {Typography} from "@/components";
import t from "@/components/ui/typography/typography.module.scss";

export type IconInputProps = {
    className?: string
    disabled?: boolean
}

export const IconInput: React.FC<IconInputProps> = (props) => {
    const {className, disabled, ...rest} = props

    const [error, setError] = useState<string|null>('You have some Error')

    const styles = `
    ${s.main}
    ${error ? s.colorError : s.colorDefault}
        `

    return (
        <>
            <input
                disabled={disabled}
                className={` ${className} ${styles}`}
                {...rest}
            />
            <Typography as={"span"} variant={'caption'} className={t.error}>{error}</Typography>
        </>
    )
}