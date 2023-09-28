import { ComponentPropsWithoutRef } from 'react'
import s from './newButton.module.scss'

export type NewButtonProps = {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
    fullWidth?: boolean
} & ComponentPropsWithoutRef<'button'>



export const NewButton = ({ variant = 'primary', fullWidth, className, ...rest }: NewButtonProps) => {
    return (
        <button className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
    )
}