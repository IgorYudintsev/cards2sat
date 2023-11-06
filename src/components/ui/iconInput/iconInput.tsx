import React, {useState} from "react";
import s from "@/components/ui/iconInput/iconInput.module.scss";
import {Typography} from "@/components";
import t from "@/components/ui/typography/typography.module.scss";
import searchPict from "./assets/search.svg";
import passwordPict from "./assets/eye.svg";
import xPict from "./assets/x.svg";

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
    const [x,setX]=useState('')

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
      ${error && isFocused ? s.colorError : !error && isFocused ? s.containerFocus : s.colorDefault}
        `
    const stylesInput = `
     ${s.container}
     ${s.main}
           `

    return (
        <>
            {icon === "search"
                ? <div
                    className={stylesContainer}
                    onFocus={handleFocus} onBlur={handleBlur}>
                    <img src={searchPict} alt="searchIcon"/>
                  <input
                      onChange={(e)=>setX(e.currentTarget.value)}
                        value={x}
                        disabled={disabled}
                        className={` ${className} ${stylesInput}`}
                        {...rest}
                    />
                    {x!=='' && <img src={xPict} alt="x" className={s.x} onClick={()=>setX('')}/>}
                </div>
                :
                <div
                    className={stylesContainer}
                    onFocus={handleFocus} onBlur={handleBlur}>
                    <input
                        disabled={disabled}
                        className={` ${className} ${stylesInput}`}
                        {...rest}
                    />
                    <img src={passwordPict} alt="passwordIcon" className={disabled ? s.icon : ''}/>

                </div>
            }


            <Typography as={"span"} variant={'caption'} className={t.error}>{error}</Typography>
        </>
    )
}

