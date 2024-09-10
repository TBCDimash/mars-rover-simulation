export type Direction = 'N' | 'E' | 'S' | 'W';

export type RoverPosition = {
  x: number;
  y: number;
  direction: Direction; // Direction the rover is facing
};

export type Plateau = {
  x: number; // Upper-right x boundary of the plateau
  y: number; // Upper-right y boundary of the plateau
};

export type Instruction = 'L' | 'R' | 'M';

export type Rover = {
  x: number;
  y: number;
  direction: Direction;
  instructions: Instruction[];
};
