import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let {title, description, imgUrl, newsUrl} = this.props;
        return (
            <div>
                <div className="card">
                    <img src={(imgUrl) ? imgUrl : "https://www.monsterinsights.com/wp-content/uploads/2020/01/how-to-set-up-google-alerts-625x300.png"} className="card-img-top" alt="..."/>
                    <div className ="card-body">
                    <h5 className ="card-title">{title?((title.length>80)?(title.slice(0,81)+"..."):title):title}</h5>
                    <p className ="card-text">{description?((description.length>120)?(description.slice(0,121)+"..."):description):description}</p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className ="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
