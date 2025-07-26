import React from 'react';
import Login from './Login';
import Header from './Header';
import Home from './Home';
import Services from './Services';
import BookCourier from './BookCourier';
import Contact from './Contact';
import CourierOrders from './CourierOrders';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 'login',
      isLoggedIn: false,
      orders: [] // List of courier orders
    };
  }

  // Called when login is successful
  login = () => {
    this.setState({ isLoggedIn: true, page: 'home' });
  };

  // Page navigation
  setPage = (page) => {
    this.setState({ page });
  };

  // Adds new courier order and redirects to orders page
  addOrder = (order) => {
    this.setState((prevState) => ({
      orders: [...prevState.orders, order],
      page: 'orders'
    }));
  };

  render() {
    const { isLoggedIn, page, orders } = this.state;

    // If user not logged in
    if (!isLoggedIn) {
      return <Login onLogin={this.login} />;
    }

    // If user is logged in, render page based on state
    return (
      <div>
        {/* Header (with buttons or nav inside it) */}
        <Header setPage={this.setPage} />

        {/* Conditional rendering based on current page */}
        {page === 'home' && <Home />}
        {page === 'services' && <Services />}
        {page === 'book' && <BookCourier onSubmit={this.addOrder} />}
        {page === 'contact' && <Contact />}
        {page === 'orders' && <CourierOrders orders={orders} />}

        {/* Optional: extra nav button if Header doesn’t include it */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button onClick={() => this.setPage('orders')}>Orders</button>
        </div>
      </div>
    );
  }
}

export default App;