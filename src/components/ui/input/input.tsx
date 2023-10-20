import s from "@/components/ui/input/input.module.scss";


export type InputProps = {
    className?: string
    disabled?: boolean
}

export const Input: React.FC<InputProps> = (props) => {
    const {className,disabled, ...rest} = props
    return (
        <input   disabled={disabled} className={` ${className} ${s.main}`}   {...rest} />
    )
}