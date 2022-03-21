import { useLocation } from 'react-router-dom';
import { ProgramDetails } from '../components/ProgramDetails';

const Program = () => {
  const location: any = useLocation();
  return <ProgramDetails program={location.state.program} />;
};

export { Program };
