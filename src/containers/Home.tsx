import { useEffect, useState } from 'react';
import { getAllPrograms } from '../api/ProgramAPI';
import { Carousel } from '../components/Carousel';
import { Program } from '../types';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const [programList, setProgramList] = useState<Array<Program>>([]);
  const history = useHistory();

  useEffect(() => {
    getAllPrograms().then((res: Array<Program>) => {
      if (res.length === 0) {
        history.push('./error');
      } else {
        setProgramList(res);
      }
    });
  }, []);

  return <Carousel programList={programList} />;
};

export { Home };
