import { useState } from 'react';
import Ladybug from './components/Ladybug';
import { Direction } from './components/Ladybug';

const STEP_SIZE = 25;

export interface LadyBug {
  posX: number;
  posY: number;
  orientation: Direction;
}

interface KeyToDirection {
  [key: string]: {
    orientation: Direction;
    posX: number;
    posY: number;
  };
}

const keyToDirection: KeyToDirection = {
  ArrowUp: { orientation: Direction.up, posX: -STEP_SIZE, posY: 0 },
  ArrowDown: { orientation: Direction.down, posX: STEP_SIZE, posY: 0 },
  ArrowLeft: { orientation: Direction.left, posX: 0, posY: -STEP_SIZE },
  ArrowRight: { orientation: Direction.right, posX: 0, posY: STEP_SIZE },
};

export const App: React.FC = () => {
  const [ladyBugState, setLadyBugState] = useState<LadyBug>({
    posX: 100,
    posY: 100,
    orientation: Direction.right,
  });

  const handleKeyUp = ({ code }: React.KeyboardEvent<HTMLDivElement>) => {
    const direction = keyToDirection[code];
    if (direction) {
      setLadyBugState({
        ...ladyBugState,
        orientation: direction.orientation,
        posX: ladyBugState.posX + direction.posX,
        posY: ladyBugState.posY + direction.posY,
      });
    }
  };

  return (
    <div tabIndex={-1} className="field" onKeyDown={handleKeyUp}>
      <header>Click anywhere to start the game</header>
      <Ladybug position={ladyBugState} />
    </div>
  );
};

export default App;
