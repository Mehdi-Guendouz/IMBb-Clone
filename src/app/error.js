"use client"

import { useEffect } from "react";


const Error = ({error , reset}) => {
    useEffect(() => {
        console.log(error)

    }, [error]);
    return (
        <div className="mt-10 text-center">
            <h2>something went wrong !!!</h2>
            <button onClick={() => reset()} className="hover:text-amber-600 p-4">Try Again</button>
        </div>
    );
}

export default Error;
