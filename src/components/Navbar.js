import React from 'react';
import { Link } from "react-router-dom";

const Navbar = ({sectionClickHandler}) => {
  return (
    <aside id="left-col" className="uk-light">
      <div className="bar-wrap">
      <a className="uk-navbar-item uk-logo"> <span className="uk-margin-small-right" uk-icon="icon: play-circle"></span>Planet Movie</a>
        <ul className="uk-nav-default uk-nav-parent-icon" uk-nav="true">
            <li className="uk-active"><Link to="/movies"><a>Home</a></Link></li>
            <li className="uk-parent">
                <a>Movies</a>
                <ul className="uk-nav-sub">
                    <li><Link to="/movies/popular">Most Popular</Link></li>
                    <li><Link to="/movies/now-playing">Now Playing</Link></li>
                    <li><Link to="/movies/top-rated">Top Rated</Link></li>
                    <li><Link to="/movies/upcoming">Upcoming</Link></li>
                </ul>
            </li>
            <li className="uk-parent">
                <a>Categories</a>
                <ul className="uk-nav-sub">
                    <li><a>Sub item</a></li>
                    <li><a>Sub item</a></li>
                </ul>
            </li>
            <li className="uk-nav-header">My Movies</li>
            <li><a><span className="uk-margin-small-right" uk-icon="icon: table"></span> Item</a></li>
            <li><a><span className="uk-margin-small-right" uk-icon="icon: thumbnails"></span> Item</a></li>
            <li className="uk-nav-divider"></li>
            <li><a><span className="uk-margin-small-right" uk-icon="icon: trash"></span> Item</a></li>
        </ul>
      </div>
    </aside>
  )
}

export default Navbar;
