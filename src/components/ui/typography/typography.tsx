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

    return <Component className={classNames}>{children}</Component>
}

//------------------------------------------------------------------------------------------------

// type VariantType =
//     'large'
//     | 'h1'
//     | 'h2'
//     | 'h3'
//     | 'body1'
//     | 'subtitle1'
//     | 'body2'
//     | 'subtitle2'
//     | 'caption'
//     | 'overline'
//     | 'link1'
//     | 'link2'
//     | 'error'
// export type TypographyProps<T extends ElementType = 'p'> = {
//     as: T,
//     children: ReactNode,
//     variant: VariantType
//     className?: string
// } & ComponentPropsWithoutRef<T>


// export const Typography = <T extends ElementType = 'p'>(props: TypographyProps<T>) => {
//     const {variant = 'body1', className, children, as: Component = 'p', ...rest} = props
//
//     const styles = `
//     ${s[variant]}
//      ${className}
//    `
//
//     return (
//         <Component
//             className={styles}
//             {...rest}
//         >{children}</Component>
//     )
// }


