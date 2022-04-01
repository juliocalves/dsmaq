import { ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';

import './button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean,
};

export function Button({
    isOutlined=false, 
    ...props
}: ButtonProps) {
    return(
        <button className={classnames(
        'button',
        {outlined:isOutlined},
        )}{...props}/>
    )
}