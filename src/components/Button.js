import React, { useEffect, useState } from "react";  

export default function Button({text}) {
    const [message, setMessage] = useState('');

    const openAlert = (message) => {
        console.log('entre a message')
        setMessage(message);
    }

    useEffect(() => {
        alert('Hello World');
    }, [message]);

    return (        
       <button className="px-4 py-2 bg-dark text-light rounded-md" onClick={() => openAlert('Hello World')}>{text}</button>
       
    )
}
