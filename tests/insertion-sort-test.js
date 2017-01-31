import { expect } from 'chai';
import insertionSort from '../scripts/insertion-sort';

describe('Insertion sort tests', () => {
  it('should return an array', () => {
    expect(Array.isArray(insertionSort()));
  });
});
