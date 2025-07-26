import React from 'react';

class BookCourier extends React.Component {
  constructor() {
    super();
    this.state = {
      sender: '',
      receiver: '',
      address: '',
      weight: '',
      status: 'Pending'
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      ...this.state,
      id: Date.now()
    };
    this.props.onSubmit(newOrder); // Send to App.js
    this.setState({
      sender: '',
      receiver: '',
      address: '',
      weight: '',
      status: 'Pending'
    });
  };

  render() {
    const { sender, receiver, address, weight } = this.state;

    return (
      <div className="page form">
        <h2>📦 Book a Courier</h2>
        <form className="form-box" onSubmit={this.handleSubmit}>
          <label>Sender Name</label>
          <input name="sender" value={sender} onChange={this.handleChange} required />

          <label>Receiver Name</label>
          <input name="receiver" value={receiver} onChange={this.handleChange} required />

          <label>Address</label>
          <textarea name="address" value={address} onChange={this.handleChange} required />

          <label>Weight (kg)</label>
          <input name="weight" type="number" value={weight} onChange={this.handleChange} required />

          <div className="form-buttons">
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </div>
    );
  }
}

export default BookCourier;