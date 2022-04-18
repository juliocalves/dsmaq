import classnames from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import './button.scss';


type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: string;
    isActive?:boolean;
}

export function IconButton({
    icon,
    isActive=false,
    ...props
}: IconButtonProps){
    return (
        <button className={classnames(
            'iconbutton',
            {active:isActive}
        )}{...props}>
            <img src={icon} alt=""/>
        </button>
    )
}