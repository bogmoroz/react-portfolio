var React = require('react');

function Home() {
  return(
    <div className='home-container'>
      <img
        className = 'avatar'
        src = 'https://github.com/bogmoroz.png?size=300'
        alt = {'Github avatar'}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium
        ultrices gravida. Suspendisse laoreet laoreet libero ut lacinia. Nulla
        rhoncus auctor velit nec efficitur. Ut sed ultricies massa. Donec fermentum
        elementum vehicula. Quisque at pellentesque lacus. Morbi porttitor ipsum
        egestas luctus ultricies. Pellentesque habitant morbi tristique senectus
        et netus et malesuada fames ac turpis egestas. Sed erat lectus, rhoncus
        vitae tincidunt eget, convallis non purus. Ut mauris leo, mollis nec
        faucibus vel, ornare vitae augue. Maecenas vel gravida velit. Mauris
        sodales urna non nisl cursus consectetur. Sed sem est, egestas at erat
        ut, porta vestibulum risus.
      </p>
    </div>
  )
}

module.exports = Home;
