import './style.css';
import { LadyBug } from '../../App';

export enum Direction {
  up = 'up',
  right = 'right',
  down = 'down',
  left = 'left',
}

interface ILadybug {
  position: LadyBug;
}

export const Ladybug: React.FC<ILadybug> = ({ position }) => {
  return (
    <div
      className={`ladybug ladybug--${position.orientation}`}
      style={{
        top: `${position.posX}px`,
        left: `${position.posY}px`,
      }}
    />
  );
};

export default Ladybug;
