import React from "react";

class Signup extends React.Component {
  state = {
    name: "",
    password: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.submitHandler(this.state);
    this.setState({
      name: "",
      password: ""
    });
  };
  render() {
    return (
      <div id="right-col">
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="username"
            name="name"
            value={this.state.name}
            onChange={this.changeHandler}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.changeHandler}
          />
          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default Signup;
