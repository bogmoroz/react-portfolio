var React = require('react');

function Home() {
  return(
    <div className='home-container'>
      <p>Bogdan Moroz</p>
      <img
        className = 'avatar'
        src = 'https://github.com/bogmoroz.png?size=200'
        alt = {'Github avatar'}
      />
    </div>
  )
}

module.exports = Home;
