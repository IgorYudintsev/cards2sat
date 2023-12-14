import {ComponentPropsWithoutRef, forwardRef, useState} from 'react'
import clsx from 'clsx'
import {CloseOutlineSvg} from '@/assets/icons/CloseOutlineSvg.tsx'
import {EyeIconSvg} from '@/assets/icons/EyeIconSvg.tsx'
import EyeOff from '../../../assets/icons/EyeOff'
import {SearchGlass} from '@/assets/icons/SearchGlass.tsx'
import {Typography} from '@/components'

import style from './textField.module.scss'

export type TextFieldProps = {
    onValueChange?: (value: string) => void
    label?: string
    errorMessage?: string
    className?: string
} & ComponentPropsWithoutRef<'input'>

//type InputRef = MutableRefObject<HTMLInputElement | null> | RefObject<HTMLInputElement | null>


export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    (
        {
            className,
            errorMessage,
            placeholder,
            type = 'text',
            label,
            //onChange,
            onValueChange,
            ...restProps
        },
        ref
    ) => {
        const classNames = {
            root: style.root,
            input: clsx(className, style.input, !!errorMessage && style.error),
            inputContainer: clsx(className, style.inputContainer, !!errorMessage && style.error),
        }


        const showIconHandler = () => setShowIcon(prev => !prev)
        const clearInputHandler = () => {
            if (typeof ref === 'function') {
                ref(null);
            } else if (ref && ref.current) {
                ref.current.setAttribute('value', '');
                ref.current.value = '';
                onValueChange?.('');
            }
        }
        // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //     onChange?.(e)
        //     onValueChange?.(e.target.value)
        //     // console.log(e.target.value)
        // }

        const [showIcon, setShowIcon] = useState(true)


        return (
            <div className={classNames.root}>
                <Typography className={style.label}>{label}</Typography>
                <div className={classNames.inputContainer} tabIndex={0}>
                    {type === 'search' && <SearchGlass className={style.leftIcon}/>}
                    <div className={style.inputWrapper}>
                        <input
                            type={generateType(type, showIcon)}
                            ref={ref}
                            className={classNames.input}
                            //onChange={handleChange}
                            placeholder={placeholder}
                            {...restProps}
                        />
                    </div>

                    {type === 'password' && (
                        <button type="button" className={style.rightIcon} onClick={showIconHandler}>
                            {showIcon ? <EyeIconSvg/> : <EyeOff/>}
                        </button>
                    )}
                    {type === 'search' && (
                        <button type="button" className={style.rightIcon} onClick={clearInputHandler}>
                            <CloseOutlineSvg className={style.closeOutlineIcon}/>
                        </button>
                    )}
                </div>
                {errorMessage && <Typography className={style.errorLabel}>{errorMessage}</Typography>}
            </div>
        )
    }
)

const generateType = (type: React.HTMLInputTypeAttribute, showIcon: boolean) => {
    if (type === 'password' && showIcon) {
        return 'password'
    } else 'text'
}


//-------------------------------------------------------------------------

// import {ComponentPropsWithoutRef, forwardRef, MutableRefObject, RefObject, useRef, useState} from 'react'
// import clsx from 'clsx'
// import {CloseOutlineSvg} from '@/assets/icons/CloseOutlineSvg.tsx'
// import {EyeIconSvg} from '@/assets/icons/EyeIconSvg.tsx'
// import EyeOff from '../../../assets/icons/EyeOff'
// import {SearchGlass} from '@/assets/icons/SearchGlass.tsx'
// import {Typography} from '@/components'
//
// import style from './textField.module.scss'
//
// export type TextFieldProps = {
//     onValueChange?: (value: string) => void
//     label?: string
//     errorMessage?: string
//     className?: string
// } & ComponentPropsWithoutRef<'input'>
//
// //type InputRef = MutableRefObject<HTMLInputElement | null> | RefObject<HTMLInputElement | null>
//
//
// export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
//     (
//         {
//             className,
//             errorMessage,
//             placeholder,
//             type = 'text',
//             label,
//             //onChange,
//             onValueChange,
//             ...restProps
//         },
//         ref
//     ) => {
//         const classNames = {
//             root: style.root,
//             input: clsx(className, style.input, !!errorMessage && style.error),
//             inputContainer: clsx(className, style.inputContainer, !!errorMessage && style.error),
//         }
//
//
//
//         const showIconHandler = () => setShowIcon(prev => !prev)
//         const clearInputHandler = () => {
//             if (ref && ref.current) {
//                 ref.current.value = ''; // Очистить значение поля ввода
//                 onValueChange?.(''); // Вызвать обработчик, если он был передан
//             }
//         }
//         // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         //     onChange?.(e)
//         //     onValueChange?.(e.target.value)
//         //     // console.log(e.target.value)
//         // }
//
//         const [showIcon, setShowIcon] = useState(true)
//
//
//         return (
//             <div className={classNames.root}>
//                 <Typography className={style.label}>{label}</Typography>
//                 <div className={classNames.inputContainer} tabIndex={0}>
//                     {type === 'search' && <SearchGlass className={style.leftIcon}/>}
//                     <div className={style.inputWrapper}>
//                         <input
//                             type={generateType(type, showIcon)}
//                             ref={ref}
//                             className={classNames.input}
//                             //onChange={handleChange}
//                             placeholder={placeholder}
//                             {...restProps}
//                         />
//                     </div>
//
//                     {type === 'password' && (
//                         <button type="button" className={style.rightIcon} onClick={showIconHandler}>
//                             {showIcon ? <EyeIconSvg/> : <EyeOff/>}
//                         </button>
//                     )}
//                     {type === 'search' && (
//                         <button type="button" className={style.rightIcon} onClick={clearInputHandler}>
//                             <CloseOutlineSvg className={style.closeOutlineIcon}/>
//                         </button>
//                     )}
//                 </div>
//                 {errorMessage && <Typography className={style.errorLabel}>{errorMessage}</Typography>}
//             </div>
//         )
//     }
// )
//
// const generateType = (type: React.HTMLInputTypeAttribute, showIcon: boolean) => {
//     if (type === 'password' && showIcon) {
//         return 'password'
//     } else 'text'
// }


//-------------------------------------------------------------------------