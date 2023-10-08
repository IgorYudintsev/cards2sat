//import {Button} from "@/components/ui/button";
import {Button} from "@/components";
import {Typography} from "@/components";

export function App() {
    return(
        <div>
            <Button variant={'primary'}>Primary Button</Button>
            <Button as={'a'} href={"http://htmlbook.ru/example/knob.html"} >Link Button</Button>
            <Typography as={'h1'} variant={'h1'}>h1 h1 h1 h1 h1 </Typography>
            <Typography as={'a'} variant={'link1'} href={"http://htmlbook.ru/example/knob.html"}>link1 link1 </Typography>
        </div>
    )
}