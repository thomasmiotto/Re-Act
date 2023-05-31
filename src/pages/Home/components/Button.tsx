import React from 'react';
import './Button.css'


type buttonProps = {
    value: string;
    action: (...args: any) => void;
}

export const Button = ({value, action}: buttonProps) => {
    return (
        <button className="btn-test" onClick={action}>{value}</button>
    )
}

