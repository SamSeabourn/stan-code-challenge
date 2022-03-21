import { useEffect, useState } from 'react';
import { getPrograms } from '../api/ProgramAPI';
import { Carousel } from '../components/Carousel';
import { Program } from '../types';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const [programList, setProgramList] = useState<Array<Program>>([]);
  const history = useHistory();

  useEffect(() => {
    getPrograms().then((res: Array<Program>) => {
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
