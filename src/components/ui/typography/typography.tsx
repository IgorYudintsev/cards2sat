import {ComponentPropsWithoutRef, ElementType, ReactNode} from 'react'
import s from './typography.module.scss'

type VariantType= 'large'|'h1' | 'h2'| 'h3'| 'body1'|'subtitle1'|'body2'|'subtitle2'|'caption'|'overline'| 'link1'|'link2'
export type TypographyProps<T extends ElementType = 'span'> = {
    as: T,
    children: ReactNode,
    variant: VariantType
} & ComponentPropsWithoutRef<T>



export const Typography =<T extends ElementType ='span'> (props: TypographyProps<T>) => {
    const{variant = 'span', className, children, as: Component = 'span', ...rest}=props
    return (
        <Component className={`${s[variant]}  ${className}`} {...rest} >{children}</Component>
    )
}


