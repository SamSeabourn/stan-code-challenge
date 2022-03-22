import { APIURL } from '../constants/constants';
import { Program } from '../types';

export const getAllPrograms = async () => {
  const result = await fetch(APIURL.PROGRAMS)
    .then((res) => {
      const json = res.json();
      return json;
    })
    .catch((err) => {
      console.error(err);
      window.location.replace(`${window.location.host}/error`);
      return [];
    });
  return result;
};

export const getProgramById = async (id: number) => {
  const result = await fetch(APIURL.PROGRAMS)
    .then((res) => {
      const json = res.json();
      return json;
    })
    .catch((err) => {
      console.error(err);
      window.location.replace(`${window.location.host}/error`);
      return [];
    });
  return result.find((p: Program) => p.id === id);
};
