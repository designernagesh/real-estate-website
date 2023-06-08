import { FaHome, FaDollarSign } from 'react-icons/fa';
import { GrMoney } from 'react-icons/gr';

import agentImage1 from '../images/s1.png';
import agentImage2 from '../images/s2.png';
import agentImage3 from '../images/s3.png';

import propertyImage1 from '../images/p1.png';
import propertyImage2 from '../images/p2.png';
import propertyImage3 from '../images/p3.png';

const HowItWorks = [
    {
        icon: <FaHome />,
        title: 'Find A Property',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
    },
    {
        icon: <FaDollarSign />,
        title: 'Find A Property',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
    },
    {
        icon: <GrMoney />,
        title: 'Find A Property',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
    },
]

const AgentsData = [
    {
        image: agentImage1,
        name: 'John Doe',
    },
    {
        image: agentImage2,
        name: 'Luca Marco',
    },
    {
        image: agentImage3,
        name: 'Digeo Alexie',
    }
]

const propertiesData = [
    {
        image: propertyImage1,
        name: 'Find A Property',
        price: '35,00,000'
    },
    {
        image: propertyImage2,
        name: 'Find A Property',
        price: '55,00,000'
    },
    {
        image: propertyImage3,
        name: 'Find A Property',
        price: '90,00,000'
    },
]

export default HowItWorks;
export { AgentsData, propertiesData };