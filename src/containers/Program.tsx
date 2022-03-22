import { useState, useEffect } from 'react';
import { Program as ProgramType } from '../types';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import { ProgramDetails } from '../components/ProgramDetails';
import { getProgramById } from '../api/ProgramAPI';

const Program = () => {
  const [program, setProgram] = useState<ProgramType | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const location: any = useLocation();
  const params: any = useParams();
  const history: any = useHistory();

  const handleKeystroke = (e: KeyboardEvent) => {
    if (e.code === 'Backspace') history.push('/home');
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeystroke);
    return () => {
      window.removeEventListener('keydown', handleKeystroke);
    };
  }, []);

  useEffect(() => {
    if (location.state != null) {
      setProgram(location.state.program);
      setIsLoading(false);
    } else {
      getProgramById(parseInt(params.id)).then((res) => {
        if (res == null) {
          history.push('/error');
        }
        setProgram(res);
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <ProgramDetails
      program={program}
      isLoading={isLoading}
    />
  );
};

export { Program };
