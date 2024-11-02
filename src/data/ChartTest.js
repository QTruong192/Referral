import { CiSun } from "react-icons/ci";

const chartData = [
  {
    tier: 'Tier 1',
    value: 10,
    color: '#B0BEC5',
    icon: <CiSun  color="#B0BEC5" />,
    details: { F0: '5%', F1: '10%', F2: '2%' },
  },
  {
    tier: 'Tier 2',
    value: 20,
    color: '#4CAF50',
    icon: <CiSun  color="#4CAF50" />,
    details: { F0: '10%', F1: '20%', F2: '5%' },
  },
  {
    tier: 'Tier 3',
    value: 30,
    color: '#03A9F4',
    icon: <CiSun  color="#03A9F4" />,
    details: { F0: '15%', F1: '25%', F2: '10%' },
  },
  {
    tier: 'Tier 4',
    value: 50,
    color: '#FF9800',
    icon: <CiSun  color="#FF9800" />,
    details: { F0: '20%', F1: '30%', F2: '15%' },
  },
  {
    tier: 'Tier 5',
    value: 80,
    color: '#9C27B0',
    icon: <CiSun  color="#9C27B0" />,
    details: { F0: '25%', F1: '35%', F2: '20%' },
  },
  {
    tier: 'Tier 6',
    value: 130,
    color: '#FF5722',
    icon: <CiSun  color="#FF5722" />,
    details: { F0: '30%', F1: '40%', F2: '25%' },
  },
];
export default chartData;