import { useEffect, useState } from 'react';
import Ladybug from './components/Ladybug';
import { Direction } from './components/Ladybug';
import { ILadybug } from './components/Ladybug';

const STEP_SIZE = 25;

export const App: React.FC = () => {
  const [ladyBug, setLadyBug] = useState<ILadybug>({
    posX: 100,
    posY: 100,
    orientation: Direction.right,
  });

  const handleKeyUp = ({ code }: KeyboardEvent) => {
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
        orientation: Direction.down,
        posX: ladyBug.posX + STEP_SIZE,
      });
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyUp);
    return () => {
      document.removeEventListener('keydown', handleKeyUp);
    };
  }, [ladyBug]);

  return (
    <div tabIndex={-1} className="field">
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
