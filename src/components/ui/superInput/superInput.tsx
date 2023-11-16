import searchPict from "@/components/ui/iconInput/assets/search.svg";
import xPict from "@/components/ui/iconInput/assets/x.svg";
import passwordPict from "@/components/ui/iconInput/assets/eye.svg";
import {useState} from "react";
import s from "./superInput.module.scss";
import t from "@/components/ui/typography/typography.module.scss";
import {Typography} from "@/components/ui/typography";
import {Control, Controller} from "react-hook-form";
import {FormValues} from "@/components/auth/loginForm/loginForm.tsx";

export type InputProps = {
    name: string
    control?: Control<FormValues>;
    label?: string;
    className?: string;
    disabled?: boolean;
    icon?: "search" | "password" | "classic";
};

export const SuperInput = (props: InputProps) => {
    const {name, control, className, disabled = true, icon = "search", ...rest} = props;
    const [isFocused, setIsFocused] = useState(false);
    const [error, setError] = useState<string | null>(null);
    //const [error, setError] = useState<string | null>('You have some Error')
    const [x, setX] = useState('');
    console.log(x)
    const [showPassword, setShowPassword] = useState(false)

    const onMouseDownHandler = () => {
        setShowPassword(!showPassword)
    }

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
  ${error ? s.borderError : s.border}
  ${error && isFocused ? s.colorError : !error && isFocused ? s.containerFocus : s.colorDefault}
`;

    const styles = `
    ${s.main}
    ${error && icon === 'classic' ? s.borderError : icon !== 'classic' ? s.borderBlack : s.borderGrey}
     `;

    return (

        <>
            <div style={{width: '100%', backgroundColor: 'black'}}>
                {icon === "search" || icon === "password" ? (
                    <>
                        <div className={stylesContainer} onFocus={handleFocus} onBlur={handleBlur}>
                            {icon === "search" && <img src={searchPict} alt="searchIcon"/>}
                            <Controller
                                name={name}
                                control={control}
                                // rules={rules}
                                // defaultValue={defaultValue}
                                render={({field, fieldState}) => (
                                    <input
                                        {...field}
                                        type={!showPassword && icon === "password" ? "password" : 'text'}
                                        disabled={disabled}
                                        className={`${className} ${styles}`}
                                        {...rest}
                                    />
                                )}
                            />
                            {icon === "search" && x !== '' &&
                                <img src={xPict} alt="x" className={s.x} onClick={() => setX('')}/>}
                            {icon === "password" &&
                                <img
                                    src={passwordPict}
                                    alt="passwordIcon"
                                    className={disabled ? s.icon : ''}
                                    onMouseDown={onMouseDownHandler}
                                    onMouseUp={onMouseDownHandler}
                                />}
                        </div>
                        <Typography as="span" variant="caption" className={t.error}>{error}</Typography>
                    </>

                ) : (
                    <div style={{width: '284px'}} onFocus={handleFocus} onBlur={handleBlur}>
                        <Controller
                            name={name}
                            control={control}
                            // rules={rules}
                            // defaultValue={defaultValue}
                            render={({field, fieldState}) => (
                                <input
                                    {...field}
                                    disabled={disabled}
                                    className={`${className} ${styles}`}
                                    {...rest}
                                />
                            )}
                        />
                        <Typography as="span" variant="caption" className={t.error}>{error}</Typography>
                    </div>
                )}
            </div>
        </>

    );
};
