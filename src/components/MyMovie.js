import React from 'react';
import '../MyMovie.css'


class MyMovie extends React.Component {
	render() {
		console.log("MOVIE in MyMovie",this.props.movie.id);
		return (

			<div className="user-movie-container">
				<div>
					<p>Hello</p>
				</div>
			</div>



		)
	}
}
export default MyMovie
