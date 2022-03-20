import { APIURL } from '../constants/constants';

export const getPrograms = async () => {
  const result = await fetch(APIURL.PROGRAMS)
    .then((res) => {
      const json = res.json();
      return json;
    })
    .catch((err) => {
      console.error(err);
      return [];
    });
  return result;
};
