import React, { FC } from 'react';
import { Root as RadioGroupRoot, Item as RadioGroupItem, Indicator as RadioGroupIndicator } from '@radix-ui/react-radio-group';
import './radio-group.module.scss';
import clsx from 'clsx';
import radioGroupStyle from './radio-group.module.scss';
import { Typography } from '@/components';

type Option = {
    label: string;
    value: string;
};

export type RadioGroupProps = {
    options: Option[];
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    disabled?: boolean;
    name?: string;
} & React.ComponentPropsWithoutRef<'div'>;

export const RadioGroup: FC<RadioGroupProps> = ({
                                                    defaultValue,
                                                    options,
                                                    ...restProps
                                                }: RadioGroupProps) => {
    const rootStyle = clsx(radioGroupStyle.RadioGroupRoot, restProps.className);

    return (
        <RadioGroupRoot
            name={restProps.name}
            className={rootStyle}
            defaultValue={defaultValue}
            aria-label="View density"
            disabled={restProps.disabled}
            onValueChange={restProps.onValueChange}
        >
            {options.map(option => {
                return (
                    <div key={option.value} style={{ display: 'flex', alignItems: 'center' }}>
                        <RadioGroupItem
                            className={radioGroupStyle.RadioGroupItem}
                            value={option.value.toString()}
                            id={option.label}
                        >
                            <div className={radioGroupStyle.RadioGroupIndicatorEmptyCircle}>
                                <RadioGroupIndicator className={radioGroupStyle.RadioGroupIndicator} />
                            </div>
                        </RadioGroupItem>

                        <Typography as="label" variant="body2" htmlFor={option.label} className={radioGroupStyle.Label}>
                            {option.label}
                        </Typography>
                    </div>
                );
            })}
        </RadioGroupRoot>
    );
};






//-----------------------------------------------------------------
// import { Root as RadioGroupRoot, Item as RadioGroupItem, Indicator as RadioGroupIndicator } from '@radix-ui/react-radio-group';
// import './radio-group.module.scss';
//
// export const RadioGroup = () => (-
//     <form>
//         <RadioGroupRoot className="RadioGroupRoot" defaultValue="default" aria-label="View density">
//             <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <RadioGroupItem className="RadioGroupItem" value="default" id="r1">
//                     <RadioGroupIndicator className="RadioGroupIndicator" />
//                 </RadioGroupItem>
//                 <label className="Label" htmlFor="r1">
//                     Default
//                 </label>
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <RadioGroupItem className="RadioGroupItem" value="comfortable" id="r2">
//                     <RadioGroupIndicator className="RadioGroupIndicator" />
//                 </RadioGroupItem>
//                 <label className="Label" htmlFor="r2">
//                     Comfortable
//                 </label>
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <RadioGroupItem className="RadioGroupItem" value="compact" id="r3">
//                     <RadioGroupIndicator className="RadioGroupIndicator" />
//                 </RadioGroupItem>
//                 <label className="Label" htmlFor="r3">
//                     Compact
//                 </label>
//             </div>
//         </RadioGroupRoot>
//     </form>
// );