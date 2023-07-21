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
            <div className="container_back">
        <button className="buttonCateg" onClick={() => {setBackHome(true)}}>Back</button>
        </div>
        </Link>
        </>
        
    )
}

