import {useState} from 'react'
import {LogoutSvg} from '@/assets/icons'
import {EditPenSvg} from '@/assets/icons/EditPenSvg.tsx'
import {Avatar} from '../../ui/avatar'
import {Card} from '../../ui/card'
import style from './personal-info.module.scss'
import {Button, Typography} from "@/components";
import ControlledTextField from "@/components/ui/controlled/controlled-textField/controlled-textField.tsx";
import {clsx} from "clsx";
import {usePersonalInfoForm} from "@/components/profile/personal-info/personal-info.ts";

type PersonalInfoProps = {
    email: string
    name: string
    avatarSrc?: string
    // onSubmit: (data: FormValues) => void
    // onlogOut: () => void
    // onAvatarChange: (newAvatar: string) => void
    // onNameChange: (newName: string) => void
}

export const PersonalInfo = ({name, email, avatarSrc}: PersonalInfoProps) => {
    const [editMode, setEditMode] = useState(false)
    const updateNicknameHandler = (data: { name: string }) => {
        if (data.name === name) {
            console.warn('you write the same nickname')
            return setEditMode(false)
        }
        alert('Form was send')
        setEditMode(false)
    }

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = usePersonalInfoForm(updateNicknameHandler, name)

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

    const classNames = {
        input: clsx(style.input),
        button: clsx(style.button,style.buttonSave),
        avatar: clsx(style.avatar),
        editAvatarButton: clsx(style.editAvatarButton),
        avatarContainer: clsx(style.avatarContainer),
        title:clsx(style.title)
    }


    const infoRender = editMode ? (
        <form onSubmit={handleSubmit} style={{width: '100%'}}>
            {/*<TextField*/}
            {/*    label="Nickname"*/}
            {/*    value={value}*/}
            {/*    onChange={onChange}*/}
            {/*    defaultValue={name}*/}
            {/*    className={style.input}*/}
            {/*    errorMessage={errors.name?.message}*/}
            {/*/>*/}
            <ControlledTextField
                className={classNames.input}
                name={'name'}
                control={control}
                label={'nickname'}
                errorMessage={errors.name?.message}
            />
            <Button
                variant="primary"
                fullWidth
                className={classNames.button}
                type="submit"
            >
                Save Changes
            </Button>
        </form>
    ) : (
        <StaticInfoRender email={email} name={name} editModeCallback={editModeOn}/>
    )

    return (
        <Card className={style.card}>
            <Typography as="h1" variant="large" className={classNames.title}>
                Personal Information
            </Typography>
            <div className={classNames.avatarContainer}>
                <div>
                    <Avatar name={name} src={avatarSrc} className={classNames.avatar}/>
                    {!editMode && (
                        <button className={classNames.editAvatarButton} onClick={() => alert('need Add logic')}>
                            <EditPenSvg/>
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

const StaticInfoRender = ({email, name, editModeCallback}: StaticInfoRenderProps) => {

    const classNames = {
        editPenSvg: clsx(style.editAvatarButton, style.editNameButton),
        email: clsx(style.email),
        logoutSvg: clsx(style.button),
        title:clsx(style.title)
    }
    const logOutHandler = () => {
        alert('You was log out')
    }

    return (
        <>
            <div className={style.nameContainer}>
                <Typography as="p" variant="h1" className={classNames.title}>
                    {name}
                </Typography>
                <button
                    className={classNames.editPenSvg}
                    onClick={editModeCallback}
                >
                    <EditPenSvg/>
                </button>
            </div>
            <Typography variant="body2" className={classNames.email}>
                {email}
            </Typography>
            <Button
                variant="secondary"
                className={classNames.logoutSvg}
                onClick={logOutHandler}>
                <LogoutSvg/>
                Logout
            </Button>
        </>
    )
}


//----------------------------------------------------------------------------------------------------------------

// import {useState} from 'react'
// import {useController, useForm} from 'react-hook-form'
// import {LogoutSvg} from '@/assets/icons'
// import {EditPenSvg} from '@/assets/icons/EditPenSvg.tsx'
// import {Avatar} from '../../ui/avatar'
// import {Card} from '../../ui/card'
// import style from './personal-info.module.scss'
// import {Button, Typography} from "@/components";
// import ControlledTextField from "@/components/ui/controlled/controlled-textField/controlled-textField.tsx";
// import {zodResolver} from "@hookform/resolvers/zod";
// import {z} from "zod";
// import {personalInfoSchema} from "@/components/profile/personal-info/personalInfoSchema.ts";
// import {clsx} from "clsx";
// import {usePersonalInfoForm} from "@/components/profile/personal-info/personal-info.ts";
// import {TextField} from "@/components/ui/textField";
//
//
// type FormValues = z.infer<typeof personalInfoSchema>
// type PersonalInfoProps = {
//     email: string
//     name: string
//     avatarSrc?: string
//     // onSubmit: (data: FormValues) => void
//     // onlogOut: () => void
//     // onAvatarChange: (newAvatar: string) => void
//     // onNameChange: (newName: string) => void
// }
//
// export const PersonalInfo = ({name, email, avatarSrc}: PersonalInfoProps) => {
//     const [editMode, setEditMode] = useState(false)
//     const updateNicknameHandler = (data: { name: string }) => {
//         if (data.name === name) {
//             console.warn('you write the same nickname')
//             return setEditMode(false)
//         }
//         alert('Form was send')
//         setEditMode(false)
//     }
//
//     const {
//         control,
//         handleSubmit,
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
//
//     //  const {
//     //     control,
//     //     handleSubmit,
//     //     formState: {errors},
//     // } = useForm<FormValues>({
//     //     resolver: zodResolver(personalInfoSchema),
//     //     defaultValues: {
//     //         nickname: 'Yudintsev',
//     //     }
//     // })
//
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
//         <form  onSubmit={handleSubmit} style={{width: '100%'}}>
//             <TextField
//                 label="Nickname"
//                 value={value}
//                 onChange={onChange}
//                 defaultValue={name}
//                 className={style.input}
//                 errorMessage={errors.name?.message}
//             />
//             {/*<ControlledTextField*/}
//             {/*     className={style.input}*/}
//             {/*    name={"nickname"}*/}
//             {/*    control={control}*/}
//             {/*    label={'nickname'}*/}
//             {/*    errorMessage={errors.nickname?.message}*/}
//             {/*/>*/}
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
//                     <Avatar name={name} src={avatarSrc} className={style.avatar}/>
//                     {!editMode && (
//                         <button className={style.editAvatarButton}  onClick={() => alert('need Add logic')}>
//                             <EditPenSvg/>
//                         </button>
//                     )}
//                 </div>
//             </div>
//
//             {infoRender}
//         </Card>
//     )
// }
//
// type StaticInfoRenderProps = {
//     editModeCallback: () => void
// } & Omit<PersonalInfoProps, 'avatarSrc'>
//
// const StaticInfoRender = ({email, name, editModeCallback}: StaticInfoRenderProps) => {
//
//     const classNames = {
//         editPenSvg: clsx(style.editAvatarButton, style.editNameButton),
//         email: clsx(style.email),
//         logoutSvg: clsx(style.button),
//     }
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
//                     className={classNames.editPenSvg}
//                     onClick={editModeCallback}
//                 >
//                     <EditPenSvg/>
//                 </button>
//             </div>
//             <Typography variant="body2" className={classNames.email}>
//                 {email}
//             </Typography>
//             <Button
//                 variant="secondary"
//                 className={classNames.logoutSvg}
//                 onClick={logOutHandler}>
//                 <LogoutSvg/>
//                 Logout
//             </Button>
//         </>
//     )
// }

