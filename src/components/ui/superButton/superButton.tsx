import {ComponentPropsWithoutRef, ElementType} from 'react';
import s from './superButton.module.scss';
import logOuticon from '@/components/ui/iconButton/assets/logOut.svg';
//import {PrimaryIconGrey} from "@/components/ui/superButton/superButton.stories.ts";


export type ButtonProps<T extends ElementType = 'button'> = {
    as?: T;
    variant?: 'primary' | 'primaryIcon' | 'primaryIconGrey' | 'secondary' | 'tertiary' | 'link';
    fullWidth?: boolean;
    className?: string;
    withIcon: boolean;
} & ComponentPropsWithoutRef<T>;

export const SuperButton = <T extends ElementType = 'button'>(
    props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
    const {variant = 'primary', fullWidth, className, as: Component = 'button', withIcon = false, ...rest} = props;



    return (
        withIcon ?
            <button className={`${s.basic} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest}>
                <img src={logOuticon} alt="logOuticon"
                     className={s.icon}
                />
                <div className={s.text} {...rest} />
            </button>
            : <Component className={`${s.basic} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />

    );
};