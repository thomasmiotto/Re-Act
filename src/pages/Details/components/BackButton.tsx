import React, { useState } from "react";
import '../../Home/components/Button.css';
import { Link } from "react-router-dom";

export const BackButton = () => {

    const [backHome, setBackHome] = useState(false);

    if(backHome) {
        return <Link to="/" />
    }

    return (
        <>
        <Link to="/">
        <button className="buttonCateg" onClick={() => {setBackHome(true)}}>Back</button>
        </Link>
        </>
        
    )
}

