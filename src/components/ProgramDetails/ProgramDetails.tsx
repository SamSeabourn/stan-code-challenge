import { useEffect } from 'react';
import { IProgramDetailsProps } from './ProgramDetails.types';
import { useHistory } from 'react-router-dom';
import './styles.css';

function ProgramDetails({ program }: IProgramDetailsProps) {
  const history = useHistory();

  const handleKeystroke = (e: KeyboardEvent) => {
    if (e.code === 'Backspace') history.push('/home');
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeystroke);
    return () => {
      window.removeEventListener('keydown', handleKeystroke);
    };
  });

  const { title, description, image, rating, genre, year } = program;
  return (
    <div className="program-details-container">
      <div
        style={{ backgroundImage: `url("${image}")` }}
        className="program-image"
        aria-label={title}
      ></div>
      <div className="program-description">
        <h1>{title}</h1>
        <h4>{`${rating} | ${year} | ${genre}`}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export { ProgramDetails };
