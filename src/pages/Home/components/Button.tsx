import React from 'react';
import "./Button.css"


type buttonProps = {
    value: string;
    action: (...args: any) => void;
}

export const Button = ({value, action}: buttonProps) => {
    return (
        <button className="button-24" onClick={action}>{value}</button>
    )
}

