import React from 'react';

class Gameroom extends React.Component {
  render () {
    return (
      <div>
        <button className="logout_button"
          onClick={ this.props.logout }>Log out</button>
      </div>
    );
  }
}

export default Gameroom;
