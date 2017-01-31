import { expect } from 'chai';
import bubbleSort from '../scripts/bubble-sort';

describe('Bubble sort tests', () => {
  it('should return an array', () => {
    expect(Array.isArray(bubbleSort()));
  });
});
