import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const News2 = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(10);

    let url = `https://newsdata.io/api/1/news?apikey=${props.apiKey}&language=${props.language}&category=${props.category}&page=${page}`;
    // let url = `https://newsdata.io/api/1/news?apikey=pub_10231dd994c7bcbf3086ea912817c056f10bc&language=${this.props.language}&category=${this.props.category}&page=${this.state.page}`;

    props.setProgress(20);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(60);
    setArticles(parsedData.results);

    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, [props.category]);

  useEffect(() => {
    updateNews();
  }, [props.language]);

  const fetchMoreData = async () => {
    setLoading(true);
    setPage(page + 1);
    // let url = `https://newsdata.io/api/1/news?apikey=pub_10572e47d558cfdf1aa29e8a9cdfb78ee56a5&language=${this.props.language}&category=${this.props.category}&page=${this.state.page}`;
    let url = `https://newsdata.io/api/1/news?apikey=${props.apiKey}&language=${props.language}&category=${props.category}&page=${page}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.results));
    setLoading(false);
  };

  return (
    <div className="container my-2">
      <h2 className="text-center">
        {props.category.charAt(0).toUpperCase() + props.category.slice(1)} News
      </h2>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
        className="row"
        style={{ height: 'auto', overflow: 'hidden' }}
      >
        {loading && <Spinner />}
        {articles.map((article) => {
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
                changes={props.category}
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
};

export default News2;
