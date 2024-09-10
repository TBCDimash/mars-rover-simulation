import { Direction, Plateau, Rover, Instruction } from './types';
import { processRover } from './rover';

// Main function to process multiple rovers
export function processRovers(plateau: Plateau, rovers: Rover[]): string[] {
  const results: string[] = [];

  for (const rover of rovers) {
    const finalPosition = processRover(plateau, rover);
    results.push(
      `${finalPosition.x} ${finalPosition.y} ${finalPosition.direction}`
    );
  }

  return results;
}

// Test Input
const plateau = { x: 5, y: 5 };

const rovers = [
  {
    x: 1,
    y: 2,
    direction: 'N' as Direction,
    instructions: [
      'L',
      'M',
      'L',
      'M',
      'L',
      'M',
      'L',
      'M',
      'M',
    ] as Instruction[],
  },
  {
    x: 3,
    y: 3,
    direction: 'E' as Direction,
    instructions: [
      'M',
      'M',
      'R',
      'M',
      'M',
      'R',
      'M',
      'R',
      'R',
      'M',
    ] as Instruction[],
  },
];

// Running the simulation
const output = processRovers(plateau, rovers);
console.log(output);
