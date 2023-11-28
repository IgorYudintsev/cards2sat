import {ComponentPropsWithoutRef, ElementType, ReactNode} from 'react'
import s from './typography.module.scss'

type VariantType =
    'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body1'
    | 'subtitle1'
    | 'body2'
    | 'subtitle2'
    | 'caption'
    | 'overline'
    | 'link1'
    | 'link2'
    | 'error'
export type TypographyProps<T extends ElementType = 'p'> = {
    as: T,
    children: ReactNode,
    variant: VariantType
} & ComponentPropsWithoutRef<T>


export const Typography = <T extends ElementType = 'p'>(props: TypographyProps<T>) => {
    const {variant = 'body1', className, children, as: Component = 'p', ...rest} = props

    const styles = `
    ${s[variant]} 
     ${className}
          ${variant === 'link1' ? s.blue : ''}
`

    return (
        <Component
            className={styles}
            {...rest}
        >{children}</Component>
    )
}


