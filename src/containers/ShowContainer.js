import React from 'react';
import Search from '../components/Search';
import '../ShowContainer.css'


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
					<p className="space-left">{overview}</p>
					<p className="space-left">{rental_price}</p>
					<p className="space-left">{purchase_price}</p>
				</div>
      </div>
		)
	}



}
export default ShowContainer

// <div className="bkg" style={{background: `url('http://image.tmdb.org/t/p/w500/${this.props.movie.backdrop_path}') no-repeat center center fixed`}} >
