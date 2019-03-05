import React from 'react';
import '../App.css';

var moment = require('moment');

const MovieCard = ({movie}) => {
  const {title, vote_average, overview, release_date, poster_path, backdrop_path} = movie
  const color = vote_average > 7 ? "default" : "secondary"

  return (
    <div className={`uk-card uk-card-default`}>
      <div className="uk-card-media-top uk-inline">

			<div class="uk-inline uk-visible-toggle">
					<img data-src={`http://image.tmdb.org/t/p/w500/${poster_path}`} alt=""  uk-img="true"/>
					<div class="uk-overlay-default uk-position-cover uk-invisible-hover c"></div>
					<div class="uk-overlay uk-position-bottom uk-dark uk-invisible-hover">
					<div className="uk-card-header">
						<h3 className="uk-card-title white-text">{title}
							<span className="release-date uk-text-small"> ({moment(release_date).format("YYYY")})</span>
						</h3>
						<p className="uk-text-meta"></p>
					</div>
					<div className="uk-card-body white-text">
						<p>Fan Score: <span className="bold">{vote_average}/10</span></p>
						<p className="white-text uk-text-truncate">{overview}</p>
						<div className="rent-buy-container">
							<button className="rent-buy-btn">Rent or Buy</button>
						</div>

					</div>
				</div>
					</div>
			</div>


      </div>

  )
}

export default MovieCard;
