import React, { Component } from 'react';

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, changes } = this.props;

    return (
      <div className="card my-2 " style={{ textAlign: 'center' }} key={changes}>
        <img
          src={imageUrl}
          className="card-img-top"
          alt="..."
          height="140px"
          width="40px"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div class="card-body">
            <p>2022-08-19 13:13:15</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}
