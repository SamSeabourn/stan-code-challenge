import { ICarouselProps } from './Carousel.types';
import './styles.css';

const Carousel = ({ programList }: ICarouselProps) => {
  return (
    <ol className="program-list">
      {programList.map((p) => (
        <li key={`program-${p.id}`} className="program-card">
          {p.title}
        </li>
      ))}
    </ol>
  );
};

export { Carousel };
