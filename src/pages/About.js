const About = (props) => {
  return (
<div className="AboutDiv">
  <div className="Picture">
  <div id="profile" className="Samonim">
      <img 
          src="https://i.imgur.com/hDDDcWsm.png"
          className="Samonim-image"
          alt="..."
        />
        <h1 id="samonim-name">Sarah Sanghwa Oh</h1>
        <h3>Pastor/Worship Director</h3>

        
        <div className="links">
          <a href="https://www.gracecov.org/gcck-grace-covenant-church-korean/%EA%B5%90%ED%9A%8C%EC%86%8C%EA%B0%9C-about-us/gcck-staff-%EC%8A%A4%ED%85%8C%ED%94%84/member-detail/1663889/?group=korean-site-pastors" target="_blank" rel="noopener noreferrer">
            <img src="https://i.imgur.com/uPTdl85.png" className="linked" alt="..." />
          </a>
        </div>
        
      </div>
      <div id="profile" className="Shin">
      <img 
          src="https://i.imgur.com/cjmDjp7m.png"
          className="Shin-image"
          alt="..."
        />
        <h1 id="Shin-name">Isaiah Minchoul Shin</h1>
        <h3>Producer</h3>

        
        <div className="links">
          <a href="https://i.imgur.com/mr2TJ0mm.png" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" className="linked" alt="..." />
          </a>
        </div>
        
      </div>
      <div id="profile" className="kim">
      <img 
          src="https://i.imgur.com/aPGO8Rom.png"
          className="Kim-image"
          alt="..."
        />
        <h1>Min Yong Kim</h1>
        <h3>Audio Engineer</h3>

        
        <div className="links">
          <a href="https://www.linkedin.com/in/min-yong-kim-0226//" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" className="linked" alt="..." />
          </a>
        </div>
        
      </div>
  </div>      
</div>
    

  );

};

export default About;