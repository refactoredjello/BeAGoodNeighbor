import React from 'react'
import axios from 'axios'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username = '',
      password = ''
    }
  }
  handleUsername (event) {
    this.setState({username: event.target.value})
  }
  handlePassowrd(even) {
    this.setState({password: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault()
    axios.post(`/user?username=${this.state.username}&password=${this.state.password}`)
    .then(function (response) {
      // console.log(response);
    })
    .catch(function (error) {
      // console.log(error);
    }) 
  }
  render() {
    (
      <div className="signup">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
        <label>Username:
          <input type="text" onChange={this.handleUsername} />
        </label>
        <label>Password:
          <input type="text" onChange={this.handlePassowrd} />
          <input type="submit" value="Submit" />
        </label>
        </form>
      </div>
    )
  }
}