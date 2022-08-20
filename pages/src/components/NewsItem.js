import React, { Component } from 'react';

export default class NewsItem extends Component {
  getTime = (time) => {
    const days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thurseday',
      'Fridya',
      'Saturday',
      'Sunday',
    ];
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const d = new Date(time);
    let output =
      d.getDate() +
      '-' +
      months[d.getMonth()] +
      '-' +
      d.getFullYear() +
      ' ' +
      days[d.getDay()];
    return output;
  };
  render() {
    let {
      title,
      description,
      imageUrl,
      newsUrl,
      changes,
      author,
      time,
      source,
    } = this.props;

    return (
      <div className="card  my-2 " key={changes}>
        <img
          src={imageUrl}
          className="card-img-top"
          alt="..."
          height="140px"
          width="40px"
        />

        <div className="card-body">
          <span
            class="position-absolute top-0 translate-middle badge rounded-pill bg-danger text-end"
            style={{ left: '90%', zIndex: '1' }}
          >
            {source}
          </span>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p class="card-text">
            <small class="text-muted">
              {console.log(this.getTime(time))}
              By
              <em> {author} </em>
              On {this.getTime(time)}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More...
          </a>
        </div>
      </div>
    );
  }
}
