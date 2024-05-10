import { useState } from 'react';
import Ladybug from './components/Ladybug';
import { Direction } from './components/Ladybug';

const STEP_SIZE = 25;

export interface LadyBug {
  posX: number;
  posY: number;
  orientation: Direction;
}

export const App: React.FC = () => {
  const [ladyBug, setLadyBug] = useState<LadyBug>({
    posX: 100,
    posY: 100,
    orientation: Direction.right,
  });

  const handleKeyUp = ({ code }: React.KeyboardEvent<HTMLDivElement>) => {
    if (code === 'ArrowUp') {
      setLadyBug({
        ...ladyBug,
        orientation: Direction.up,
        posX: ladyBug.posX - STEP_SIZE,
      });
    } else if (code === 'ArrowLeft') {
      setLadyBug({
        ...ladyBug,
        orientation: Direction.left,
        posY: ladyBug.posY - STEP_SIZE,
      });
    } else if (code === 'ArrowRight') {
      setLadyBug({
        ...ladyBug,
        orientation: Direction.right,
        posY: ladyBug.posY + STEP_SIZE,
      });
    } else if (code === 'ArrowDown') {
      setLadyBug({
        ...ladyBug,
        orientation: Direction.left,
        posX: ladyBug.posX + STEP_SIZE,
      });
    }
  };

  return (
    <div tabIndex={-1} className="field" onKeyDown={handleKeyUp}>
      <header>Click anywhere to start the game</header>
      <Ladybug
        posX={ladyBug.posX}
        posY={ladyBug.posY}
        orientation={ladyBug.orientation}
      />
    </div>
  );
};

export default App;
