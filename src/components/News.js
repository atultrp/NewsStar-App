import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {

    constructor(){
        super();
        
    }

    render() {
        return (
            <div className="container">
                <h1 className="my-3">Top Headlines</h1>
                <NewsItems/>
            </div>
        )
    }
}

export default News
