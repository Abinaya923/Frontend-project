import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.username && this.state.password) {
      this.props.onLogin();
    } else {
      alert("Please enter both username and password");
    }
  };

  render() {
    return (
      <div className="login-wrapper">
        <div className="login-card">
          <h2>🚀 QuickCourier Login</h2>
          <p className="subtitle">Enter your credentials to continue</p>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="login-input"
              onChange={this.handleInput}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="login-input"
              onChange={this.handleInput}
            />
            <button type="submit" className="login-btn">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;