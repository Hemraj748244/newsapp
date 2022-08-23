import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
export default class News extends Component {
  checkDisabled = false;
  updateNews = async () => {
    this.setState({ loading: true });
    let url = `https://newsdata.io/api/1/news?apikey=pub_10231dd994c7bcbf3086ea912817c056f10bc&language=${this.props.language}&category=${this.props.category}&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.results,
      nextPage: parsedData.nextPage,
      loading: false,
    });
  };

  handleNext = async () => {
    this.updateNews();
    this.setState({
      page: this.state.page + 1,
    });
    // this.setState({ loading: true });
    // let url = `https://newsdata.io/api/1/news?apikey=pub_10231dd994c7bcbf3086ea912817c056f10bc&language=${
    //   this.props.language
    // }&category=${this.props.category}&page=${this.state.page + 1}`;
    // let data = await fetch(url);
    // let parsedData = await data.json();

    // this.setState({
    //   page: this.state.page + 1,
    //   articles: parsedData.results,
    //   nextPage: parsedData.nextPage,
    //   loading: false,
    // });
  };

  handlePrev = async () => {
    this.updateNews();
    this.setState({
      page: this.state.page - 1,
    });
    // this.setState({ loading: true });
    // let url = `https://newsdata.io/api/1/news?apikey=pub_10231dd994c7bcbf3086ea912817c056f10bc&language=${
    //   this.props.language
    // }&category=${this.props.category}&page=${this.state.page + 1}`;
    // let data = await fetch(url);
    // let parsedData = await data.json();

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.results,
    //   nextPage: parsedData.nextPage,
    //   loading: false,
    // });
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
    console.log(this.props.language + ' - ' + prevProps.language);
    if (this.props.category !== prevProps.category) {
      this.updateNews();
      this.setState({
        page: this.state.page + 1,
      });
      // console.log(this.props.category);
      // this.setState({ loading: true });
      // let url = `https://newsdata.io/api/1/news?apikey=pub_10231dd994c7bcbf3086ea912817c056f10bc&language=${
      //   this.props.language
      // }&category=${this.props.category}&page=${this.state.page + 1}`;
      // let data = await fetch(url);
      // let parsedData = await data.json();
      // this.setState({
      //   articles: parsedData.results,

      //   nextPage: parsedData.nextPage,
      //   loading: false,
      // });
    } else if (this.props.language !== prevProps.language) {
      this.updateNews();
      this.setState({
        page: this.state.page + 1,
      });
      // this.setState({ loading: true });
      // let url = `https://newsdata.io/api/1/news?apikey=pub_10231dd994c7bcbf3086ea912817c056f10bc&language=${
      //   this.props.language
      // }&category=${this.props.category}&page=${this.state.page + 1}`;
      // let data = await fetch(url);
      // let parsedData = await data.json();
      // this.setState({
      //   articles: parsedData.results,

      //   nextPage: parsedData.nextPage,
      //   loading: false,
      // });
    }
  }

  async componentDidMount() {
    this.updateNews();
    this.setState({
      page: this.state.page + 1,
    });
    // console.log(this.props.category);
    // this.setState({ loading: true });

    // let url = `https://newsdata.io/api/1/news?apikey=pub_10231dd994c7bcbf3086ea912817c056f10bc&language=${
    //   this.props.language
    // }&category=${this.props.category}&page=${this.state.page + 1}`;
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   articles: parsedData.results,

    //   nextPage: parsedData.nextPage,
    //   loading: false,
    // });
  }
  fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    this.setState({ loading: true });
    let url = `https://newsdata.io/api/1/news?apikey=pub_10231dd994c7bcbf3086ea912817c056f10bc&language=${this.props.language}&category=${this.props.category}&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      items: this.state.articles.concat(parsedData.results),
      loading: false,
    });
  };
  render() {
    return (
  <div>
        <h2 className="text-center">
          {this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)}{' '}
          News
        </h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<Spinner />}
        >
              <div className="container my-3">
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
                      author={article.creator ?? 'Anonmous'}
                      time={article.pubDate}
                      source={article.source_id}
                    />
                  </div>
                );
              })}
          </div>
        </InfiniteScroll>
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
