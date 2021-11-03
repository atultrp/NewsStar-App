import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div class ="card-body">
                    <h5 class ="card-title">Card title</h5>
                    <p class ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" class ="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
