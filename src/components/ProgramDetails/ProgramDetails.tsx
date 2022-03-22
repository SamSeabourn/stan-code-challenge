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
    <div className="program-details">
      <div
        style={{ backgroundImage: `url("${image}")` }}
        className="program-details__image"
        aria-label={title}
      />
      <div className="program-details__description-wrapper">
        <h1 className="program-details__title">{title}</h1>
        <h4 className="program-details__title">{`${rating} | ${year} | ${genre}`}</h4>
        <p className="program-details__description">{description}</p>
      </div>
    </div>
  );
}

export { ProgramDetails };
