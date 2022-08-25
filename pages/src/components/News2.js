import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingBar from 'react-top-loading-bar';
export default class News extends Component {
  checkDisabled = false;
  updateNews = async () => {
    this.props.setProgress(10);

    let url = `https://newsdata.io/api/1/news?apikey=pub_10572e47d558cfdf1aa29e8a9cdfb78ee56a5&language=${this.props.language}&category=${this.props.category}&page=${this.state.page}`;
    // let url = `https://newsdata.io/api/1/news?apikey=pub_10231dd994c7bcbf3086ea912817c056f10bc&language=${this.props.language}&category=${this.props.category}&page=${this.state.page}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(60);
    this.setState({
      articles: parsedData.results,
      nextPage: parsedData.nextPage,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
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
      loading: true,
      page: 1,
      nextPage: 1,
      totalResults: 0,
    };
  }

  async componentDidUpdate(prevProps, prevState) {
    console.log(this.props.language + ' - ' + prevProps.language);
    if (this.props.category !== prevProps.category) {
      this.setState({
        page: 1,
      });
      this.updateNews();

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
      // this.setState({
      //   page: this.state.page + 1,
      // });
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
    // this.setState({
    //   page: this.state.page + 1,
    // });
    this.updateNews();
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
    // // 20 more records in 1.5 secs
    // if (this.state.articles.length === this.state.totalResults) {
    //   this.setState({
    //     hasMore: false,
    //   });
    //   return;
    // }
    this.setState({ loading: true, page: this.state.page + 1 });

    // let url = `https://newsdata.io/api/1/news?apikey=pub_10572e47d558cfdf1aa29e8a9cdfb78ee56a5&language=${this.props.language}&category=${this.props.category}&page=${this.state.page}`;
    let url = `https://newsdata.io/api/1/news?apikey=pub_10231dd994c7bcbf3086ea912817c056f10bc&language=${this.props.language}&category=${this.props.category}&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.results),
      loading: false,
    });
  };
  render() {
    return (
      <div className="container my-2">
        <h2 className="text-center">
          {this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)}{' '}
          News
        </h2>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
          className="row"
          style={{ height: 'auto', overflow: 'hidden' }}
        >
          {this.state.loading && <Spinner />}
          {this.state.articles.map((article) => {
            return (
              <div className="col-md-4" key={article.link + article.pubDate}>
                <NewsItem
                  title={article.title}
                  description={article.description}
                  imageUrl={
                    article.image_url ??
                    'https://st.depositphotos.com/1016225/2107/i/600/depositphotos_21071341-stock-photo-newspaper.jpg'
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
        </InfiniteScroll>
      </div>
    );
  }
}
