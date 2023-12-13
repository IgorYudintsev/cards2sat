import { BrandSvg } from '@/assets/icons/BrandSvg'
import { Button } from '@/components'
import { Typography } from '@/components'

import style from './header.module.scss'
import {Avatar} from "@/components/ui/avatar";

type HeaderProps = {
    signOutClick: () => void
    isAuth: boolean
    userInfo: {
        name: string
        avatarSrc: string
    }
}
export const Header = ({ isAuth, userInfo, signOutClick }: HeaderProps) => {
    return (
        <header className={style.header}>
            <BrandSvg />
            {isAuth && (
                <div className={style.userContainer}>
                    <Typography className={style.userNameText}>{userInfo.name}</Typography>
                    <Avatar name={userInfo.name} src={userInfo.avatarSrc} />
                </div>
            )}
            {!isAuth && (
                <Button variant="primary" onClick={signOutClick}>
                    Sign In
                </Button>
            )}
        </header>
    )
}



//--------------------------------
// import s from './Header.module.scss';
// import '../../styles/_colors.scss'
// import incubatorIcon from './assets/Logo.png'
// import ava from './assets/ava.jpg'
// import {SuperButton} from "@/components/ui/superButton";
// import React from "react";
//
//
// type PropsTypeHeader={
//     logined:boolean
// }
//
// export const Header:React.FC<PropsTypeHeader> = ({logined=false}) => {
//     return (
//         <div style={{width:'100%',height:'1000px',backgroundColor:'black'}}>
//             <div className={s.wrapper}>
//                 <span>
//                     <img className={s.iconIncubator} src={incubatorIcon} alt="incubaIcon" />
//                 </span>
//                 {logined ? (
//                     <div className={s.avaCase}>
//                         <div className={s.inscription}><u>Sasha</u></div>
//                         <div className={s.ava}><img src={ava} alt="ava"/></div>
//                     </div>
//                 ) : (
//                     <span className={s.buttonCase}>
//                         <SuperButton withIcon={false}>sign in</SuperButton>
//                     </span>
//                 )}
//             </div>
//         </div>
//     );
// };