import { IProgramDetailsProps } from './ProgramDetails.types';
import './styles.css';

const ProgramDetails = ({ program, isLoading }: IProgramDetailsProps) => {
  const { title, description, image, rating, genre, year } = program ?? {};
  return (
    <div className="program-details">
      <div
        style={{ backgroundImage: `url("${image}")` }}
        className="program-details__image"
        aria-label={title}
      />
      <div className="program-details__description-wrapper">
        <h1
          className={`program-details__title ${
            isLoading ? 'program-details__title--loading' : ''
          }`}
        >
          {title}
        </h1>
        <h4
          className={`program-details__stats ${
            isLoading ? 'program-details__stats--loading' : ''
          }`}
        >{`${rating} | ${year} | ${genre}`}</h4>
        <p
          className={`program-details__description ${
            isLoading ? 'program-details__description--loading' : ''
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export { ProgramDetails };
