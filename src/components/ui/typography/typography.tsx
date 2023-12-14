import {ComponentPropsWithoutRef, ElementType, ReactNode} from 'react'
import s from './typography.module.scss'

export type TypographyProps<T extends ElementType = 'p'> = {
    as?: T
    children?: ReactNode
    className?: string
    variant?:
        | 'large'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'body1'
        | 'body2'
        | 'subtitle1'
        | 'subtitle2'
        | 'caption'
        | 'overline'
        | 'link1'
        | 'link2'
        | 'error'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>({
                                                            as,
                                                            className,
                                                            children,
                                                            variant = 'body1',
                                                            ...restProps
                                                        }: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>) => {
    const Component = as || 'p'
    const classNames = `${s[variant]} ${className}`

    //console.log({...restProps})
    return <Component className={classNames} {...restProps}>{children}</Component>
}



