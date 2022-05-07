import { InputHTMLAttributes } from "react";

import './questionstypes.scss'

type TextTypeProps = InputHTMLAttributes<HTMLInputElement> & {
    name:string;
    innerText:string;
}

export function TextType({
    name,
    innerText,
    ...props
}:TextTypeProps){
    return(
        <div className="input-type">
            <span>{name}</span>
            <div>
                <input {...props} placeholder={innerText} />
            </div>
        </div>
    )
}