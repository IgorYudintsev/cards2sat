import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {LogoutSvg} from '@/assets/icons'
import {EditPenSvg} from '@/assets/icons/EditPenSvg.tsx'
import {Avatar} from '../../ui/avatar'
import {Card} from '../../ui/card'
import style from '../personal-info/personal-info.module.scss'
import {Button, Typography} from "@/components";
import ControlledTextField from "@/components/ui/controlled/controlled-textField/controlled-textField.tsx";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {personalInfoSchema} from "@/components/profile/personal-info/personalInfoSchema.ts";
import {clsx} from "clsx";

type FormValues = z.infer<typeof personalInfoSchema>
type PersonalInfoProps = {
    email: string
    name: string
    avatarSrc?: string
    onSubmit: (data: FormValues) => void
    // onlogOut: () => void
    // onAvatarChange: (newAvatar: string) => void
    // onNameChange: (newName: string) => void
}

export const PersonalInfo = ({ name, email, avatarSrc,onSubmit }: PersonalInfoProps) => {
    const [editMode, setEditMode] = useState(false)

    const updateNicknameHandler = (data: { name: string }) => {
        if (data.name === name) {
            console.warn('you write the same nickname')

            return setEditMode(false)
        }
        alert('Form was send')
        setEditMode(false)
    }

    // const {
    //     control,
    //     handleSubmit,
    //     formState: { errors },
    // } = usePersonalInfoForm(updateNicknameHandler, name)

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<FormValues>({
        resolver: zodResolver(personalInfoSchema),
        defaultValues: {
            nickname: 'Yudintsev',
              }
    })

    // const {
    //     field: { value, onChange },
    // } = useController({
    //     name: 'name',
    //     control,
    //     defaultValue: name,
    // })

    const editModeOn = () => {
        setEditMode(true)
    }

    const infoRender = editMode ? (
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
                        {/*<TextField*/}
            {/*    label="Nickname"*/}
            {/*    value={value}*/}
            {/*    onChange={onChange}*/}
            {/*    defaultValue={name}*/}
            {/*    className={style.input}*/}
            {/*    errorMessage={errors.name?.message}*/}
            {/*/>*/}
                        <ControlledTextField
                name={"nickname"}
                control={control}
                label={'nickname'}
                errorMessage={errors.nickname?.message}
            />
            <Button
                variant="primary"
                fullWidth
                className={style.button + ' ' + style.buttonSave}
                type="submit"
            >
                Save Changes
            </Button>
        </form>
    ) : (
        // <div>pusto</div>
        <StaticInfoRender email={email} name={name} editModeCallback={editModeOn} />
    )

    return (
        <Card className={style.card}>
            <Typography as="h1" variant="large" className={style.title}>
                Personal Information
            </Typography>
            <div className={style.avatarContainer}>
                <div>
                    <Avatar name={name} src={avatarSrc} className={style.avatar} />
                    {!editMode && (
                        <button className={style.editAvatarButton}>
                            <EditPenSvg />
                        </button>
                    )}
                </div>
            </div>
            {infoRender}
        </Card>
    )
}

type StaticInfoRenderProps = {
    editModeCallback: () => void
} & Omit<PersonalInfoProps, 'avatarSrc'>

const StaticInfoRender = ({ email, name, editModeCallback }: StaticInfoRenderProps) => {

    const classNames = {
        editPenSvg: clsx(style.editAvatarButton, style.editNameButton),
        logoutSvg:clsx(style.button),
    }
    const logOutHandler = () => {
        alert('You was log out')
    }

    return (
        <>
            <div className={style.nameContainer}>
                <Typography as="p" variant="h1" className={style.title}>
                    {name}
                </Typography>
                <button
                    className={classNames.editPenSvg}
                    onClick={editModeCallback}
                >
                    <EditPenSvg />
                </button>
            </div>
            <Typography variant="body2" className={style.email}>
                {email}
            </Typography>
            <Button variant="secondary" className={classNames.logoutSvg} onClick={logOutHandler}>
                <LogoutSvg />
                Logout
            </Button>
        </>
    )
}
//----------------------------------------------------------------------------------------------------
//
// import {useState} from 'react'
// import {useForm} from 'react-hook-form'
// import {LogoutSvg} from '@/assets/icons'
// import {EditPenSvg} from '@/assets/icons/EditPenSvg.tsx'
// import {Avatar} from '../../ui/avatar'
// import {Card} from '../../ui/card'
// import style from '../personal-info/personal-info.module.scss'
// import {Button, Typography} from "@/components";
// import ControlledTextField from "@/components/ui/controlled/controlled-textField/controlled-textField.tsx";
// import {zodResolver} from "@hookform/resolvers/zod";
// import {z} from "zod";
// import {personalInfoSchema} from "@/components/profile/personal-info/personalInfoSchema.ts";
//
//
// type FormValues = z.infer<typeof personalInfoSchema>
// type PersonalInfoProps = {
//     email: string
//     name: string
//     avatarSrc?: string
//     onSubmit: (data: FormValues) => void
//     // onlogOut: () => void
//     // onAvatarChange: (newAvatar: string) => void
//     // onNameChange: (newName: string) => void
// }
//
// export const PersonalInfo = ({ name, email, avatarSrc,onSubmit }: PersonalInfoProps) => {
//     const [editMode, setEditMode] = useState(false)
//
//     const updateNicknameHandler = (data: { name: string }) => {
//         if (data.name === name) {
//             console.warn('you write the same nickname')
//
//             return setEditMode(false)
//         }
//         alert('Form was send')
//         setEditMode(false)
//     }
//
//     // const {
//     //     control,
//     //     handleSubmit,
//     //     formState: { errors },
//     // } = usePersonalInfoForm(updateNicknameHandler, name)
//
//     const {
//         control,
//         handleSubmit,
//         formState: {errors},
//     } = useForm<FormValues>({
//         resolver: zodResolver(personalInfoSchema),
//         defaultValues: {
//             nickname: 'Yudintsev',
//         }
//     })
//
//     // const {
//     //     field: { value, onChange },
//     // } = useController({
//     //     name: 'name',
//     //     control,
//     //     defaultValue: name,
//     // })
//
//     const editModeOn = () => {
//         setEditMode(true)
//     }
//
//     const infoRender = editMode ? (
//         <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
//             {/*<TextField*/}
//             {/*    label="Nickname"*/}
//             {/*    value={value}*/}
//             {/*    onChange={onChange}*/}
//             {/*    defaultValue={name}*/}
//             {/*    className={style.input}*/}
//             {/*    errorMessage={errors.name?.message}*/}
//             {/*/>*/}
//             <ControlledTextField
//                 name={"nickname"}
//                 control={control}
//                 label={'nickname'}
//                 errorMessage={errors.nickname?.message}
//             />
//             <Button
//                 variant="primary"
//                 fullWidth
//                 className={style.button + ' ' + style.buttonSave}
//                 type="submit"
//             >
//                 Save Changes
//             </Button>
//         </form>
//     ) : (
//         <StaticInfoRender email={email} name={name} editModeCallback={editModeOn} />
//     )
//
//     return (
//         <Card className={style.card}>
//             <Typography as="h1" variant="large" className={style.title}>
//                 Personal Information
//             </Typography>
//             <div className={style.avatarContainer}>
//                 <div>
//                     <Avatar name={name} src={avatarSrc} className={style.avatar} />
//                     {!editMode && (
//                         <button className={style.editAvatarButton}>
//                             <EditPenSvg />
//                         </button>
//                     )}
//                 </div>
//             </div>
//             {infoRender}
//         </Card>
//     )
// }
//
// type StaticInfoRenderProps = {
//     editModeCallback: () => void
// } & Omit<PersonalInfoProps, 'avatarSrc'>
//
// const StaticInfoRender = ({ email, name, editModeCallback }: StaticInfoRenderProps) => {
//     const logOutHandler = () => {
//         alert('You was log out')
//     }
//
//     return (
//         <>
//             <div className={style.nameContainer}>
//                 <Typography as="p" variant="h1" className={style.title}>
//                     {name}
//                 </Typography>
//                 <button
//                     className={style.editAvatarButton + ' ' + style.editNameButton}
//                     onClick={editModeCallback}
//                 >
//                     <EditPenSvg />
//                 </button>
//             </div>
//             <Typography variant="body2" className={style.email}>
//                 {email}
//             </Typography>
//             <Button variant="secondary" className={style.button} onClick={logOutHandler}>
//                 <LogoutSvg />
//                 Logout
//             </Button>
//         </>
//     )
// }

//----------------------------------------------------------------------------------------------------

// import {useState} from 'react'
// import {useController} from 'react-hook-form'
// import {LogoutSvg} from '@/assets/icons'
// import {EditPenSvg} from '@/assets/icons/EditPenSvg.tsx'
// import {Avatar} from '../../ui/avatar'
// import {Card} from '../../ui/card'
// import {usePersonalInfoForm} from './personal-info'
// import style from '../personal-info/personal-info.module.scss'
// import {TextField} from "@/components/ui/textField";
// import {Button, Typography} from "@/components";
//
// type PersonalInfoProps = {
//     email: string
//     name: string
//     avatarSrc?: string
//     // onlogOut: () => void
//     // onAvatarChange: (newAvatar: string) => void
//     // onNameChange: (newName: string) => void
// }
//
// export const PersonalInfo = ({ name, email, avatarSrc }: PersonalInfoProps) => {
//     const [editMode, setEditMode] = useState(false)
//
//     const updateNicknameHandler = (data: { name: string }) => {
//         if (data.name === name) {
//             console.warn('you write the same nickname')
//
//             return setEditMode(false)
//         }
//         alert('Form was send')
//         setEditMode(false)
//     }
//
//     const {
//         handleSubmit,
//         control,
//         formState: { errors },
//     } = usePersonalInfoForm(updateNicknameHandler, name)
//
//     const {
//         field: { value, onChange },
//     } = useController({
//         name: 'name',
//         control,
//         defaultValue: name,
//     })
//
//     const editModeOn = () => {
//         setEditMode(true)
//     }
//
//     const infoRender = editMode ? (
//         <form onSubmit={handleSubmit} style={{ width: '100%' }}>
//             <TextField
//                 label="Nickname"
//                 value={value}
//                 onChange={onChange}
//                 defaultValue={name}
//                 className={style.input}
//                 errorMessage={errors.name?.message}
//             />
//             <Button
//                 variant="primary"
//                 fullWidth
//                 className={style.button + ' ' + style.buttonSave}
//                 type="submit"
//             >
//                 Save Changes
//             </Button>
//         </form>
//     ) : (
//         <StaticInfoRender email={email} name={name} editModeCallback={editModeOn} />
//     )
//
//     return (
//         <Card className={style.card}>
//             <Typography as="h1" variant="large" className={style.title}>
//                 Personal Information
//             </Typography>
//             <div className={style.avatarContainer}>
//                 <div>
//                     <Avatar name={name} src={avatarSrc} className={style.avatar} />
//                     {!editMode && (
//                         <button className={style.editAvatarButton}>
//                             <EditPenSvg />
//                         </button>
//                     )}
//                 </div>
//             </div>
//             {infoRender}
//         </Card>
//     )
// }
//
// type StaticInfoRenderProps = {
//     editModeCallback: () => void
// } & Omit<PersonalInfoProps, 'avatarSrc'>
//
// const StaticInfoRender = ({ email, name, editModeCallback }: StaticInfoRenderProps) => {
//     const logOutHandler = () => {
//         alert('You was log out')
//     }
//
//     return (
//         <>
//             <div className={style.nameContainer}>
//                 <Typography as="p" variant="h1" className={style.title}>
//                     {name}
//                 </Typography>
//                 <button
//                     className={style.editAvatarButton + ' ' + style.editNameButton}
//                     onClick={editModeCallback}
//                 >
//                     <EditPenSvg />
//                 </button>
//             </div>
//             <Typography variant="body2" className={style.email}>
//                 {email}
//             </Typography>
//             <Button variant="secondary" className={style.button} onClick={logOutHandler}>
//                 <LogoutSvg />
//                 Logout
//             </Button>
//         </>
//     )
// }

//----------------------------------------------------------------------------------------------------
