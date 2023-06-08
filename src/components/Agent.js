const Agent = ({ person }) => {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={person.image} alt="image" />
      </div>
      <div className="a-b-text">
        <h3>{person.name}</h3>
        <a href="#" className="agent-btn">
          Learn More
        </a>
      </div>
    </div>
  );
};
export default Agent;
