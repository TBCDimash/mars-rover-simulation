import { processRovers } from './src/index';
import { Instruction, Direction } from './src/types';

describe('processRovers', () => {
  it('should process multiple rovers with instructions', () => {
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
    const expectedPositions = ['1 3 N', '5 1 E'];
    expect(processRovers(plateau, rovers)).toEqual(expectedPositions);
  });

  it('should throw an error if any rover moves outside the plateau boundaries', () => {
    const plateau = { x: 5, y: 5 };
    const rovers = [
      {
        x: 5,
        y: 5,
        direction: 'N' as Direction,
        instructions: ['M'] as Instruction[],
      },
    ];
    expect(() => processRovers(plateau, rovers)).toThrow(
      'Rover moved outside the plateau boundaries!'
    );
  });
});
