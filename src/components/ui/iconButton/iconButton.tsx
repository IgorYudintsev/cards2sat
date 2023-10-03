import {ComponentPropsWithoutRef, ElementType} from 'react'
import logOuticon from './assets/logOut.png'
import s from './iconButton.module.scss'


export type ButtonProps<T extends ElementType = 'button'> = {
    as?: T
    variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
    fullWidth?: boolean
    className?: string
} & ComponentPropsWithoutRef<T>

export const IconButton = <T extends ElementType = 'button'>(
    props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
    const {variant = 'primary', fullWidth, className, as: Component = 'button', ...rest} = props

    return (
        <button className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}  {...rest} >
            <img src={logOuticon} alt="logOuticon" style={{marginTop:'2px',color:'white'}}/>
            <span {...rest}  />
        </button>


    )
}


//---------------------------------------------
// import { ComponentPropsWithoutRef, ElementType } from 'react'
// import s from './iconButton.module.scss'
//
// export type ButtonProps<T extends ElementType = 'button'> = {
//     as?: T
//     variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
//     fullWidth?: boolean
//     className?: string
// } & ComponentPropsWithoutRef<T>
//
// export const IconButton = <T extends ElementType = 'button'>(
//     props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
// ) => {
//     const { variant = 'primary', fullWidth, className, as: Component = 'button', ...rest } = props
//
//     return (
//         <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
//     )
// }