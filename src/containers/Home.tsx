import { useEffect, useState } from 'react';
import { getPrograms } from '../api/ProgramAPI';
import { Carousel } from '../components/Carousel';
import { Program } from '../types';

const Home = () => {
  const [programList, setProgramList] = useState<Array<Program>>([]);

  useEffect(() => {
    getPrograms().then((res: Array<Program>) => setProgramList(res));
  }, []);

  return <Carousel programList={programList} />;
};

export { Home };
