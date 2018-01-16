import React from 'react';
import GreetingContainer from './welcome/greeting_container';

class Homepage extends React.Component {
  render () {
    return (
      <div className="homepage">
        <header>
          <GreetingContainer />
        </header>

        <div className='homepage-intro'>
        </div>
      </div>
    );
  }
}

export default Homepage;
