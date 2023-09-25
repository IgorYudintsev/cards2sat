import {Button} from "@/components/ui/button";

export function App() {
    return(
        <div>
            <Button variant={'primary'}>Primary Button</Button>
            <Button as={'a'} href={"http://htmlbook.ru/example/knob.html"} >Link Button</Button>
        </div>

    )
}