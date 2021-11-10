import React from 'react';
import loading from "./loading.gif"

const Loading = () => {
    return (
        <div className="text-center">
            <img className="my-3" src={loading} alt="Please Wait!" />
        </div>
    )
}

export default Loading
