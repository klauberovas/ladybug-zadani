import './style.css';

export enum Direction {
  up = 'up',
  right = 'right',
  down = 'down',
  left = 'left',
}

export interface ILadybug {
  orientation: Direction;
  posX: number;
  posY: number;
}

export const Ladybug: React.FC<ILadybug> = ({ orientation, posX, posY }) => {
  return (
    <div
      className={`ladybug ladybug--${orientation}`}
      style={{
        top: `${posX}px`,
        left: `${posY}px`,
      }}
    />
  );
};

export default Ladybug;
