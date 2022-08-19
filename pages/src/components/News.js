import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export default class News extends Component {
  checkDisabled = false;
  handleNext = async () => {
    this.setState({ loading: true });
    let url = `https://newsdata.io/api/1/news?apikey=pub_10231dd994c7bcbf3086ea912817c056f10bc&language=${
      this.props.language
    }&category=${this.props.category}&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.results,
      nextPage: parsedData.nextPage,
      loading: false,
    });
  };

  handlePrev = async () => {
    this.setState({ loading: true });
    let url = `https://newsdata.io/api/1/news?apikey=pub_10231dd994c7bcbf3086ea912817c056f10bc&language=${
      this.props.language
    }&category=${this.props.category}&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.results,
      nextPage: parsedData.nextPage,
      loading: false,
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      nextPage: 1,
    };
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.props.category !== prevProps.category) {
      console.log(this.props.category);
      this.setState({ loading: true });
      let url = `https://newsdata.io/api/1/news?apikey=pub_10231dd994c7bcbf3086ea912817c056f10bc&language=${
        this.props.language
      }&category=${this.props.category}&page=${this.state.page + 1}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.results,
        totalresults: parsedData.totalResults,
        nextPage: parsedData.nextPage,
        loading: false,
      });
    }
  }

  async componentDidMount() {
    console.log(this.props.category);
    this.setState({ loading: true });

    let url = `https://newsdata.io/api/1/news?apikey=pub_10231dd994c7bcbf3086ea912817c056f10bc&language=${
      this.props.language
    }&category=${this.props.category}&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.results,
      totalresults: parsedData.totalResults,
      nextPage: parsedData.nextPage,
      loading: false,
    });
  }
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">
          {this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)}{' '}
          News
        </h2>
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
                    changes={this.props.category}
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
