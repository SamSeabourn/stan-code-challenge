import { useEffect, useState } from 'react';
import { Program } from '../../types';
import { ICarouselProps } from './Carousel.types';
import { navigationHandler } from './carouselHelpers';
import { useHistory } from 'react-router-dom';
import './styles.css';

const Carousel = ({ programList }: ICarouselProps) => {
  const [selectionIndex, setSelectionIndex] = useState<number>(0);
  const [range, setRange] = useState({ min: 0, max: 5 });
  const history = useHistory();

  const handleKeystroke = (e: KeyboardEvent) => {
    if (e.code === 'Enter') {
      history.push({
        pathname: '/program',
        state: {
          program: programList[selectionIndex],
        },
      });
    }
    setSelectionIndex(
      navigationHandler(e.code, selectionIndex, programList.length)
    );
  };

  const handleSelect = (i: number) => {
    history.push({
      pathname: '/program',
      state: {
        program: programList[i],
      },
    });
  };

  const updateVisiblePrograms = () => {
    if (selectionIndex === 0) {
      setRange({ min: 0, max: 5 });
      return;
    }
    setRange({ min: selectionIndex - 1, max: selectionIndex + 4 });
  };

  useEffect(() => {
    updateVisiblePrograms();
    window.addEventListener('keydown', handleKeystroke);
    return () => {
      window.removeEventListener('keydown', handleKeystroke);
    };
  }, [selectionIndex, programList]);

  return (
    <ol className={`program-list ${selectionIndex > 0 ? 'translate' : ''}`}>
      {programList.map((p: Program, i) => {
        if (i < range.min || i > range.max) return;
        return (
          <li
            key={`program-${p.id}`}
            onClick={() => handleSelect(i)}
            className={`program-card ${i === selectionIndex ? 'selected' : ''}`}
            aria-label={p.title}
            style={{ backgroundImage: `url("${p.image}")` }}
          />
        );
      })}
    </ol>
  );
};

export { Carousel };
