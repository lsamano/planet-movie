import React from 'react';
var moment = require('moment');

const MovieCard = ({movie}) => {
  const {title, vote_average, overview, release_date, poster_path, backdrop_path} = movie
  const color = vote_average > 7 ? "default" : "secondary"

  return (
    <div className={`uk-card uk-card-${color} uk-card-hover`}>
      <div className="uk-card-media-top">
        <img data-src={`http://image.tmdb.org/t/p/w500/${poster_path}`} alt="" uk-img="true"/>
      </div>
      <div className="uk-card-header">
        <h3 className="uk-card-title">{title}
          <span className="uk-text-muted uk-text-small"> ({moment(release_date).format("YYYY")})</span>
        </h3>
        <p className="uk-text-meta"></p>
      </div>
      <div className="uk-card-body">
        <p>{vote_average}/10</p>
      <p className="uk-text-truncate">{overview}</p>
      </div>
    </div>
  )
}

export default MovieCard;
