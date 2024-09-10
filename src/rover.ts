import { Direction, RoverPosition, Plateau, Rover } from './types';
import { turnLeft, turnRight } from './utils';

function move(x: number, y: number, direction: Direction): RoverPosition {
  switch (direction) {
    case 'N':
      return { x, y: y + 1, direction };
    case 'E':
      return { x: x + 1, y, direction };
    case 'S':
      return { x, y: y - 1, direction };
    case 'W':
      return { x: x - 1, y, direction };
  }
}

// Processes the instructions for a single rover.
// Handles turning (L/R) and moving (M) and ensures the rover doesn't exceed plateau boundaries.
export function processRover(
  plateau: Plateau, // The plateau's max coordinates
  rover: Rover // Rover's initial state and instructions
): RoverPosition {
  let { x, y, direction } = rover;

  for (const instruction of rover.instructions) {
    if (instruction === 'L') {
      direction = turnLeft(direction);
    } else if (instruction === 'R') {
      direction = turnRight(direction);
    } else if (instruction === 'M') {
      const newPosition = move(x, y, direction);
      x = newPosition.x;
      y = newPosition.y;

      // Check if rover has moved out of bounds
      if (x < 0 || x > plateau.x || y < 0 || y > plateau.y) {
        throw new Error('Rover moved outside the plateau boundaries!');
      }
    }
  }

  return { x, y, direction };
}
