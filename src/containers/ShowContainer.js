import React from 'react';
import Search from '../components/Search';
import '../ShowContainer.css'

var moment = require('moment');

class ShowContainer extends React.Component {



	render() {
		const {title, vote_average, overview, release_date, poster_path, backdrop_path, rental_price, purchase_price} = this.props.movie

		return (
			<div>
				<div className="ol"></div>
				<img className="bkg" src={`http://image.tmdb.org/t/p/w500/${backdrop_path}`} />
        <Search className="z"/>
				<div className="content">
        	<h1 className="space-left">{title}</h1>
					<h4 className="space-left">Released ({moment(release_date).format("YYYY")}) | Fan Score: {vote_average}</h4>
					<p className="space-left overview">{overview}</p>
					<div className="space-left flexify-btns">
						<div className="rent">
							<button className="rent-buy-btn">{`Rent: $${rental_price}`}</button>
						</div>
						<div className="buy">
							<button className="rent-buy-btn">{`Buy: $${purchase_price}`}</button>
						</div>
					</div>
				</div>
      </div>
		)
	}



}
export default ShowContainer

// <div className="bkg" style={{background: `url('http://image.tmdb.org/t/p/w500/${this.props.movie.backdrop_path}') no-repeat center center fixed`}} >
