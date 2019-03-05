import React from 'react';

const Navbar = (props) => {
  return (
    <aside id="left-col" className="uk-light">
      <div className="bar-wrap">
      <a className="uk-navbar-item uk-logo" href="#"> <span className="uk-margin-small-right" uk-icon="icon: play-circle"></span>Planet Movie</a>
        <ul className="uk-nav-default uk-nav-parent-icon" uk-nav="true">
            <li className="uk-active"><a href="#">Home</a></li>
            <li className="uk-parent">
                <a href="#">Movies</a>
                <ul className="uk-nav-sub">
                    <li><a href="#">Most Popular</a></li>
                    <li><a href="#">Latest</a></li>
                </ul>
            </li>
            <li className="uk-parent">
                <a href="#">Categories</a>
                <ul className="uk-nav-sub">
                    <li><a href="#">Sub item</a></li>
                    <li><a href="#">Sub item</a></li>
                </ul>
            </li>
            <li className="uk-nav-header">My Profile</li>
            <li><a href="#"><span className="uk-margin-small-right" uk-icon="icon: table"></span> Item</a></li>
            <li><a href="#"><span className="uk-margin-small-right" uk-icon="icon: thumbnails"></span> Item</a></li>
            <li className="uk-nav-divider"></li>
            <li><a href="#"><span className="uk-margin-small-right" uk-icon="icon: trash"></span> Item</a></li>
        </ul>
      </div>
    </aside>
  )
}

export default Navbar;
