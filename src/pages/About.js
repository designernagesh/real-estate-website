import aboutImage from '../images/aboutImage.png'
const About = () => {
  return (
    <div id="about">
      <div className="about-model">
        <img src={aboutImage} alt="about image" />
      </div>
      <div className="about-text">
        <h2>Find A Property</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu ultrices lorem. Etiam dignissim faucibus luctus. Etiam sollicitudin, mi vel placerat tempor, dolor neque pellentesque erat, a convallis mauris nulla eget turpis. Etiam pellentesque ex purus, eget maximus tellus suscipit ultrices. Vestibulum porta ullamcorper nulla id vulputate. Quisque quis est libero. Sed viverra lacus elit, eget mollis diam viverra a. Aenean malesuada eros sodales lacus vehicula, sit amet pulvinar quam convallis. </p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default About;
