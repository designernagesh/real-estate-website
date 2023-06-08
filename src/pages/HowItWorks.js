import HowItData from "../data/data";

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <div className="container">
        <h2>How It Works</h2>
        <div className="flex">
          {HowItData.map((work, i) => {
            return (
              <div key={i}>
                <i>{work.icon}</i>
                <h4>{work.title}</h4>
                <p>{work.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
