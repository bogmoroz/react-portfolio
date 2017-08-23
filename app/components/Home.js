var React = require('react');

function Home() {
  return(
    <div className='home-container'>
      <img
        className = 'avatar'
        src = 'https://github.com/bogmoroz.png?size=300'
        alt = {'Github avatar'}
      />
    <p className='home-about-me'>
        My name is Bogdan Moroz, I am 20 years old and I come from Saint Petersburg,
        Russia. I am a student of Information Technology at South-Eastern Finland
        University of Applied Sciences in Mikkeli, Finland. There, the primary focus
        of my studies is network engineering. I have spent the last year in Amsterdam,
        doing an exchange semester on mobile development at Amsterdam Univesity of Applied
        Sciences followed by a software engineering internship at MediaLAB Amsterdam. Apart
        from networking and software, I have also done a significant amount of work in
        media productions, graphical pubishing and game design.
        <br/><br/>
        As the work presented in this portfolio hopefully reflects, I am interested
        in many areas of technology and innovation. I am looking for a place where
        I can combine my technical skills and creativity to work on projects that
        make the world a better place.
      </p>
    </div>
  )
}

module.exports = Home;
