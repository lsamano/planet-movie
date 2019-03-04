import React from 'react';

const Search = (props) => {
  return (
    <nav className="uk-navbar-container uk-margin" uk-navbar="true">

    <div className="nav-overlay uk-navbar-left">

        <a className="uk-navbar-item uk-logo" href="#">Logo</a>

        <ul className="uk-navbar-nav">
            <li className="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
        </ul>

    </div>

    <div className="nav-overlay uk-navbar-right">

        <a className="margin-large-right uk-navbar-toggle" uk-icon="icon: search" uk-toggle="target: .nav-overlay; animation: uk-animation-fade" href="#"></a>

    </div>

    <div className="nav-overlay uk-navbar-left uk-flex-1" hidden>

        <div className="uk-navbar-item uk-width-expand">
            <form className="uk-search uk-search-navbar uk-width-1-1">
                <input className="uk-search-input" type="search" placeholder="Search..." autofocus="true" />
            </form>
        </div>

        <a className="uk-navbar-toggle" uk-close uk-toggle="target: .nav-overlay; animation: uk-animation-fade" href="#"></a>

    </div>

</nav>
  )
}

export default Search;
