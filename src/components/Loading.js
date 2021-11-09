import React, { Component } from 'react';
import loading from "./loading.gif"

export class Loading extends Component {
    render() {
        return (
            <div className="text-center">
                <img className="my-3" src={loading} alt="Please Wait!"/>
            </div>
        )
    }
}

export default Loading
