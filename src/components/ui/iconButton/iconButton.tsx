import React from 'react'
import logOuticon from './assets/logOut.svg'
import s from './iconButton.module.scss'


export type ButtonProps = {
     variant?: 'primary' | 'primaryGray'
    fullWidth?: boolean
    className?: string
}

export const IconButton:React.FC  <ButtonProps>=(
    props
) => {
    const {variant = 'primary', fullWidth, className, ...rest} = props

    return (
        <button className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}  {...rest} >
            <img src={logOuticon} alt="logOuticon" style={{marginTop:'2px',color:'white'}}/>
            <span {...rest}  />
        </button>
    )
}

