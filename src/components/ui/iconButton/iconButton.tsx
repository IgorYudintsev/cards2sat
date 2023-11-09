import React from 'react'
import logOuticon from './assets/logOut.svg'
import s from './iconButton.module.scss'


export type ButtonProps = {
     variant?: 'primaryIcon' | 'primaryGreyIcon'
    fullWidth?: boolean
    className?: string
    children?:React.ReactNode
    disabled?:boolean
 }

export const IconButton:React.FC <ButtonProps>=(
    props
) => {
    const {variant = 'primaryIcon' , fullWidth, className,...rest} = props

    return (
        <button className={`${s.basic}  ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}  {...rest} >
            <img src={logOuticon} alt="logOuticon" style={{marginTop:'2px',color:'white'}}/>
            <span {...rest}  />
        </button>
    )
}

