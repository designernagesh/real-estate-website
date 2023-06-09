import Agent from '../components/Agent';
import { AgentsData } from '../data/data';

const Agents = () => {
  return (
    <div id="agents">
      <div className="a-heading">
        <h1>Agents</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      </div>
      <div className="b-container">
        {
          AgentsData.map( (person)=>{
            return (
              <Agent person={person} />
            )
          })
        }
      </div>
    </div>
  );
};
export default Agents;
