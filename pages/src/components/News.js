import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import { useParams } from 'react-router-dom';

export default class News extends Component {
  checkDisabled = false;
  handleNext = async () => {
    this.setState({ loading: true });
    let url = `https://newsdata.io/api/1/news?apikey=pub_10231dd994c7bcbf3086ea912817c056f10bc&language=${
      this.props.language
    }&category=${this.state.category}&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.results,
      nextPage: parsedData.nextPage,
      loading: false,
      category: this.props.category,
    });
  };

  handlePrev = async () => {
    this.setState({ loading: true });
    let url = `https://newsdata.io/api/1/news?apikey=pub_10231dd994c7bcbf3086ea912817c056f10bc&language=${
      this.props.language
    }&category=${this.state.category}&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.results,
      nextPage: parsedData.nextPage,
      loading: false,
      category: this.props.category,
    });
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      nextPage: 1,
      category: 'top',
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    let url = `https://newsdata.io/api/1/news?apikey=pub_10231dd994c7bcbf3086ea912817c056f10bc&language=${
      this.props.language
    }&category=${this.state.category}&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.results,
      totalresults: parsedData.totalResults,
      nextPage: parsedData.nextPage,
      loading: false,
      category: this.props.category,
    });
    console.log(parsedData.results.length);
  }
  render() {
    return (
      <div className="container my-3">
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((article) => {
              return (
                <div className="col-md-4" key={article.link}>
                  <NewsItem
                    title={article.title}
                    description={article.description}
                    imageUrl={
                      article.image_url ??
                      'http://bafn.ca/wp-content/uploads/2017/10/news.gif'
                    }
                    newsUrl={article.link}
                  />
                </div>
              );
            })}
        </div>
        <div className="row">
          <div className="col-sm-6" style={{ textAlign: 'left' }}>
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrev}
            >
              Previous
            </button>
          </div>
          <div className="col-sm-6" style={{ textAlign: 'right' }}>
            <button
              disabled={this.state.nextPage == null}
              type="button"
              className="btn btn-dark"
              id="next"
              onClick={this.handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export function News2(props) {
  let parameter = useParams();
  return (
    <div>
      <News category={parameter} />
    </div>
  );
}
