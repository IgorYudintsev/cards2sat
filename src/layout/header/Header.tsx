import s from './Header.module.scss';
import '../../styles/_colors.scss'
import incubatorIcon from './assets/Logo.png'
import ava from './assets/ava.jpg'
import {SuperButton} from "@/components/ui/superButton";
import React from "react";


type PropsTypeHeader={
    logined:boolean
}

export const Header:React.FC<PropsTypeHeader> = ({logined=false}) => {
    return (
        <div style={{width:'100%',height:'1000px',backgroundColor:'black'}}>
            <div className={s.wrapper}>
                <span>
                    <img className={s.iconIncubator} src={incubatorIcon} alt="incubaIcon" />
                </span>
                {logined ? (
                    <div className={s.avaCase}>
                        <div className={s.inscription}><u>Sasha</u></div>
                        <div className={s.ava}><img src={ava} alt="ava"/></div>
                    </div>
                ) : (
                    <span className={s.buttonCase}>
                        <SuperButton withIcon={false}>sign in</SuperButton>
                    </span>
                )}
            </div>
        </div>
    );
};