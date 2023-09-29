import { ComponentPropsWithoutRef } from 'react'
import s from './typography.module.scss'

export type TypographyProps = {
    variant: 'large' | 'h1' |  'h2'| 'h3'| 'subtitle1'| 'body2'| 'subtitle2'| 'caption'| 'overline'| 'link1'| 'link2'
} & ComponentPropsWithoutRef<'span'>



export const Typography = ({ variant = 'h1',  className, ...rest }: TypographyProps) => {
    return (
        <span className={`${s[variant]}  ${className}`} {...rest} >{rest.children}</span>
    )
}