import {Button, Typography} from '@/components'
import {Card} from "@/components/ui/card";
import style from '../auth.module.scss'
import {PATH} from "@/routes";
import {clsx} from "clsx";
import {CheckEmailSvg} from "@/assets/icons/CheckEmailSvg.tsx";

type CheckEmailProps = {
    email: string
}

export const CheckEmail = ({email}: CheckEmailProps) => {

    const classNames = {
        typographyCheck: clsx(style.title),
        checkEmailSvg: clsx(style.checkEmailSvg),
        caption: clsx(style.typographyCaption, style.marginBottom),
    }

    return (
        <Card className={style.card}>
            <Typography as="h1" variant="h1" className={classNames.typographyCheck}>
                Check Email
            </Typography>

            <div className={classNames.checkEmailSvg}>
                <CheckEmailSvg/>
            </div>

            <Typography variant="caption" className={classNames.caption}>
                We’ve sent an Email with instructions to {email}
            </Typography>

            <Button variant={'primary'} as={'a'} href={PATH.LOGIN}  fullWidth >Back to Sign In</Button>
          </Card>
    )
}
