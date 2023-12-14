import s from "@/components/ui/input/input.module.scss";
import {useState} from "react";
import {Typography} from "@/components";
import t from '@/components/ui/typography/typography.module.scss'


export type InputProps = {
    className?: string
    disabled?: boolean
}

export const Input: React.FC<InputProps> = (props) => {
    const {className, disabled, ...rest} = props

    // const [error, setError] = useState<string|null>('You have some Error')
    const [error, setError] = useState<string|null>(null)
    console.log(setError)

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

//-------------------------------------------------------------------------------------------------------

// import s from "@/components/ui/input/input.module.scss";
// import {useState} from "react";
// import {Typography} from "@/components";
// import t from '@/components/ui/typography/typography.module.scss'
//
//
// export type InputProps = {
//     className?: string
//     disabled?: boolean
// }
//
// export const Input: React.FC<InputProps> = (props) => {
//     const {className, disabled, ...rest} = props
//
//     // const [error, setError] = useState<string|null>('You have some Error')
//     const [error, setError] = useState<string|null>(null)
//     console.log(setError)
//
//     const styles = `
//     ${s.main}
//     ${error ? s.colorError : s.colorDefault}
//         `
//
//     return (
//         <>
//             <input
//                 disabled={disabled}
//                 className={` ${className} ${styles}`}
//                 {...rest}
//             />
//             <Typography as={"span"} variant={'caption'} className={t.error}>{error}</Typography>
//         </>
//     )
// }