import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
        return (
            <div>
                <div className="card">
                    <img src={(imgUrl) ? imgUrl : "https://www.monsterinsights.com/wp-content/uploads/2020/01/how-to-set-up-google-alerts-625x300.png"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">
                            {title ? ((title.length > 85) ? (title.slice(0, 86) + "...") : title) : title}
                            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "87%", zIndex: "1" }}>
                                <small>
                                    {source}
                                </small>
                            </span>
                        </h5>
                        <p className="card-text">{description ? ((description.length > 120) ? (description.slice(0, 121) + "...") : description) : description}</p>
                        <p className="card-text">
                            <small className="text-muted">
                                By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
                            </small>
                        </p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
