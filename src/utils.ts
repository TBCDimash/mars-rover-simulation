import { Direction } from './types';

const DIRECTIONS: Direction[] = ['N', 'E', 'S', 'W'];

export function turnLeft(currentDirection: Direction): Direction {
  return DIRECTIONS[(DIRECTIONS.indexOf(currentDirection) - 1 + 4) % 4];
}

export function turnRight(currentDirection: Direction): Direction {
  return DIRECTIONS[(DIRECTIONS.indexOf(currentDirection) + 1) % 4];
}
