// import React, { useState } from "react";
// import s from "@/components/ui/iconInput/iconInput.module.scss";
// import {Typography} from "@/components";
//
// export const IconInput = () => {
//     const [isFocused, setIsFocused] = useState(false);
//     //const [isDisabled, setIsDisabled] = useState(false);
//
//     const handleFocus = () => {
//         setIsFocused(true);
//     };
//
//     const handleBlur = () => {
//         setIsFocused(false);
//     };
//
//     // const handleDisable = () => {
//     //     setIsDisabled(!isDisabled);
//     // };
//
//     const containerStyles = `
//     ${s.container}
//     ${isFocused ? s.focused : ""}
//
//   `;
//
//     return (
//         <div className={containerStyles} tabIndex={0} onFocus={handleFocus} onBlur={handleBlur}>
//             <div className={s.container}>
//                 <input
//                     // disabled={disabled}
//                     className={` ${className} ${styles}`}
//                     {...rest}
//                 />
//                 <img src={search} alt="searchIcon" style={{marginTop: '2px', color: 'white'}}/>
//             </div>
//             {/*<Typography as={"span"} variant={'caption'} className={t.error}>{error}</Typography>*/}
//         </div>
//     );
// };


//-----------------------------------------------------------
import React, {useState} from "react";
import s from "@/components/ui/iconInput/iconInput.module.scss";
import {Typography} from "@/components";
import t from "@/components/ui/typography/typography.module.scss";
import search from "./assets/search.svg";

export type IconInputProps = {
    className?: string
    disabled?: boolean
}

export const IconInput: React.FC<IconInputProps> = (props) => {
    const {className, disabled, ...rest} = props

    const [isFocused, setIsFocused] = useState(false);
     const [error, setError] = useState<string | null>('You have some Error')
    // const [error, setError] = useState<string | null>(null)

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };


    const stylesContainer = `
    ${s.container}
    ${isFocused ? s.containerFocus : ''}
     ${disabled ? s.containerDisabled : ''}
      ${error ? s.colorError : s.colorDefault}
        `

    const stylesInput = `
    ${s.main}
   

        `

    return (
        <>
            <div
                className={stylesContainer}
                onFocus={handleFocus} onBlur={handleBlur}>
                <input
                    disabled={disabled}
                    className={` ${className} ${stylesInput}`}
                    {...rest}
                />
                <img src={search} alt="searchIcon" style={{marginTop: '2px', color: 'white'}}/>
            </div>


            <Typography as={"span"} variant={'caption'} className={t.error}>{error}</Typography>
        </>
    )
}

