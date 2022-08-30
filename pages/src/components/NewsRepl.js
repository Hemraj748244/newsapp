import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';

const NewsRepl = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async (page) => {
    props.setProgress(10);
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    const url1 = `https://newsdata.io/api/1/news?apikey=${props.apiKey}&language=${props.language}&category=${props.category}&page=${page}`;
    setLoading(true);
    let data = await fetch(url1);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.results);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    updateNews();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - Apna Samachar`;
    window.scrollTo(0, 0);
    updateNews(1);

    // eslint-disable-next-line
  }, [props.category]);

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - Apna Samachar`;
    updateNews();
    // eslint-disable-next-line
  }, [props.language]);

  const fetchMoreData = async () => {
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    let url = `https://newsdata.io/api/1/news?apikey=${props.apiKey}&language=${
      props.language
    }&category=${props.category}&page=${page + 1}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.results));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h1
        className="text-center"
        style={{ margin: '35px 0px', marginTop: '90px' }}
      >
        Apna Samachar - Super {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {/* {loading && <Spinner />} */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
        style={{ height: 'auto', overflow: 'hidden' }}
      >
        <div className="container">
          <div className="row">
            {!loading &&
              articles.map((article) => {
                return (
                  <div
                    className="col-md-4"
                    key={article.link + article.pubDate + article.title}
                  >
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
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

NewsRepl.defaultProps = {
  language: 'hi',
  page: 1,
  category: 'top',
};

NewsRepl.propTypes = {
  language: PropTypes.string,
  page: PropTypes.number,
  category: PropTypes.string,
};

export default NewsRepl;
