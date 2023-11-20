import React from "react";
import s from "@/components/ui/checkbox/checkbox.module.scss";
import {CheckIcon} from "@radix-ui/react-icons";
import {Control, Controller} from "react-hook-form";
import {FormValues} from "@/components/auth/loginForm/loginForm.tsx";
import * as Checkbox from '@radix-ui/react-checkbox';

export type CheckboxProps = {
    control?: Control<FormValues>;
    name: string;
    className?: string;
    disabled?: boolean;
    checked?: boolean;
    onValueChange?:any
};


export const CheckBox: React.FC<CheckboxProps> = (props) => {
    const {control, name, checked, onValueChange,className, disabled, ...rest} = props;

    return (
        <div className={s.circle}>
            <Controller
                name={name}
                control={control}
                defaultValue={false}
                render={({field}) => (
                    <Checkbox.Root
                        {...field}
                        className={`${s.main} ${className}`}
                        disabled={disabled}
                        checked={field.value}
                        onChange={field.onChange}
                        onCheckedChange={field.onChange}
                        value={field.value}
                        //checked={field.value}
                        // onChange={(event) => field.onChange(event.currentTarget.value)}
                        // checked={checked}
                        // onCheckedChange={onValueChange}
                        // value={field.value}
                    >
                        <Checkbox.Indicator>
                            <CheckIcon/>
                        </Checkbox.Indicator>
                    </Checkbox.Root>
                )}
            />
        </div>
    );
};


// <LabelRadix.Root asChild>
//     <Typography variant="body2" className={classNames.label} as={'label'}>
//         <div className={classNames.buttonWrapper}>
//             <CheckboxRadix.Root
//                 className={classNames.root}
//                 checked={checked}
//                 onCheckedChange={onValueChange}
//                 disabled={disabled}
//                 required={required}
//                 id={id}
//             >
//                 {checked && (
//                     <CheckboxRadix.Indicator className={classNames.indicator} forceMount>
//                         <CheckIcon/>
//                     </CheckboxRadix.Indicator>
//                 )}
//             </CheckboxRadix.Root>
//         </div>
//         {label}
//     </Typography>
// </LabelRadix.Root>


//----------------------------------------------
// // import React from 'react';
// import '@radix-ui/themes/styles.css';
// import * as Checkbox from '@radix-ui/react-checkbox';
// import React from "react";
// import s from "@/components/ui/checkbox/checkbox.module.scss";
// import {CheckIcon} from "@radix-ui/react-icons";
// import {Control, Controller} from "react-hook-form";
// import {FormValues} from "@/components/auth/loginForm/loginForm.tsx";
//
//
// export type CheckboxProps = {
//     control?: Control<FormValues>;
//     name:string
//     className?: string
//     disabled?: boolean
//     checked?:boolean
// }
// export const CheckBox: React.FC<CheckboxProps> = (props) => {
//     const {control,name,className,disabled, ...rest} = props
//
//     // const [checked, setChecked] = React.useState(false);
//     // const handleCheckedChange = () => {
//     //     setChecked(!checked);
//     // };
//
//     return (
//         <div className={s.circle}>
//             <Controller
//                 name={name}
//                 control={control}
//                 // rules={rules}
//                 // defaultValue={defaultValue}
//                 render={({field, fieldState}) => (
//
//             <Checkbox.Root disabled={disabled} className={`${s.main}  ${className}`} {...rest}
//                            //checked={checked}
//                            // onCheckedChange={handleCheckedChange}
//             >
//                 <Checkbox.Indicator>
//                     <CheckIcon/>
//                 </Checkbox.Indicator>
//             </Checkbox.Root>
//                 )}
//             />
//         </div>
//     );
// };


//---------------------------------------------------------------------------
// // import React from 'react';
// import '@radix-ui/themes/styles.css';
// import * as Checkbox from '@radix-ui/react-checkbox';
// import React from "react";
// import s from "@/components/ui/checkbox/checkbox.module.scss";
// import {CheckIcon} from "@radix-ui/react-icons";
// import {Control} from "react-hook-form";
// import {FormValues} from "@/components/auth/loginForm/loginForm.tsx";
//
//
// export type CheckboxProps = {
//     control?: Control<FormValues>;
//     className?: string
//     disabled?: boolean
//     checked?:boolean
// }
// export const CheckBox: React.FC<CheckboxProps> = (props) => {
//     const {control,className,disabled, ...rest} = props
//
//     const [checked, setChecked] = React.useState(false);
//     const handleCheckedChange = () => {
//         setChecked(!checked);
//     };
//
//     return (
//         <div className={s.circle}>
//             <Checkbox.Root disabled={disabled} className={`${s.main}  ${className}`} {...rest} checked={checked}
//                            onCheckedChange={handleCheckedChange}>
//                 <Checkbox.Indicator>
//                     <CheckIcon/>
//                 </Checkbox.Indicator>
//             </Checkbox.Root>
//         </div>
//     );
// };
