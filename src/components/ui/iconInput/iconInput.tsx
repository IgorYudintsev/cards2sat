import React, {useState} from "react";
import s from "@/components/ui/iconInput/iconInput.module.scss";
import {Typography} from "@/components";
import t from "@/components/ui/typography/typography.module.scss";
import search from "./assets/search.svg";
import password from "./assets/eye.svg";

export type IconInputProps = {
    className?: string
    disabled?: boolean
    icon: "search" | "password"
}

export const IconInput: React.FC<IconInputProps> = (props) => {
    const {className, disabled = true, icon = "search", ...rest} = props

    const [isFocused, setIsFocused] = useState(false);
    // const [error, setError] = useState<string | null>('You have some Error')
    const [error, setError] = useState<string | null>(null)

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
      ${error && isFocused? s.colorError : !error && isFocused? s.containerFocus :  s.colorDefault}
        `
     const stylesInput = `
    ${s.main}
           `

    return (
        <>
            {icon === "search"
                ? <div
                    // style={{border: "2px solid blue"}}
                    className={stylesContainer}
                    onFocus={handleFocus} onBlur={handleBlur}>
                    <img src={search} alt="searchIcon"/>
                    <input
                        disabled={disabled}
                        className={` ${className} ${stylesInput}`}
                        {...rest}
                    />
                </div>
                :
                <div
                    // style={isFocused ?{border: "2px solid blue"}:{}}
                    className={stylesContainer}
                    onFocus={handleFocus} onBlur={handleBlur}>
                    <input
                        disabled={disabled}
                        className={` ${className} ${stylesInput}`}
                        {...rest}
                    />
                    <img src={password} alt="passwordIcon" className={disabled ? s.icon : ''}/>
                    {/*<img src={password} alt="passwordIcon" style={disabled ?{ opacity:'0.5'}:{}}/>*/}
                </div>
            }


            <Typography as={"span"} variant={'caption'} className={t.error}>{error}</Typography>
        </>
    )
}

