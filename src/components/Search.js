import React from 'react';

const Search = (props) => {
  return (
    <nav className="uk-navbar-container" data-uk-navbar>

    <div className="nav-overlay uk-navbar-left">
       <ul className="uk-navbar-nav">
           <li className="uk-active"><a>Login</a></li>
           <li><a>Sign Up</a></li>
       </ul>

   </div>



    <div className="nav-overlay uk-navbar-right">

        <a className="margin-large-right uk-navbar-toggle" uk-icon="icon: search" uk-toggle="target: .nav-overlay; animation: uk-animation-fade"></a>

    </div>

    <div className="nav-overlay uk-navbar-left uk-flex-1" hidden="true">

        <div className="uk-navbar-item uk-width-expand">
            <form className="uk-search uk-search-navbar uk-width-1-1">
                <input className="uk-search-input" name="search" type="search" placeholder="Search..." autofocus="true" />
            </form>
        </div>

        <a className="uk-navbar-toggle" data-uk-close uk-toggle="target: .nav-overlay; animation: uk-animation-fade"></a>

    </div>

</nav>
  )
}

export default Search;
