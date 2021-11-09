import React, { Component } from 'react'
import Loading from './Loading';
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 9,
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitalizeFuction= (string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `NewsStar - ${this.capitalizeFuction(this.props.category)}`
    }


    async updateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1ac1232bc7604eda8836ee0ee4b41ac2&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    async componentDidMount() {
        this.updateNews();
    }

    handlePreviousClick = async () => {
        this.setState({
            page: this.state.page - 1
        })
        this.updateNews();
    }

    handleNextClick = async () => {
        this.setState({
            page: this.state.page + 1
        })
        this.updateNews();
    }

    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center my-3 headingTitle">Top {this.capitalizeFuction(this.props.category)} Headlines</h1>
                {this.state.loading && <Loading className="justify-content-center" />}
                <div className="row">
                    {!(this.state.loading) && this.state.articles.map(element => {
                        return <div className="col-md-4 my-3" key={element.url}>
                            <NewsItems title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className="d-flex justify-content-between my-3">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button disabled={this.state.page > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
