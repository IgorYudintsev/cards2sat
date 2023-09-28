import { ComponentPropsWithoutRef } from 'react'
import s from './typography.module.scss'

export type TypographyProps = {
    variant?: 'large' | 'h1'
 } & ComponentPropsWithoutRef<'a'>



export const Typography = ({ variant = 'h1',  className, ...rest }: TypographyProps) => {
    return (
        <span className={`${s[variant]}  ${className}`} {...rest} >yifusfidsoimjijuijinin</span>
    )
}