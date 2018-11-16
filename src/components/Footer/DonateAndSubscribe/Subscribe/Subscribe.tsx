import * as React from 'react';
import './Subscribe.scss';

interface State {
  email: string;
}

export default class Subscribe extends React.PureComponent<{}, State> {
  state: State = {
    email: ''
  };

  render() {
    const { email } = this.state;

    return (
      <div className="subscribe">
        <h2>Subscribe to MyCrypto</h2>
        <p>Get updates from MyCrypto straight to your inbox!</p>
        <form action="#" className="subscribe-input-wrapper">
          <div className="subscribe-input-wrapper-input">
            <input
              type="email"
              placeholder="Email address"
              onChange={this.handleChange}
              value={email}
            />
          </div>
          <div className="subscribe-input-wrapper-button">
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    );
  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      email: event.target.value
    });
  };
}
