import { expect } from 'chai';
import mergeSort from '../scripts/merge-sort';

describe('Merge sort tests', () => {
  it('should return an array', () => {
    expect(Array.isArray(mergeSort()));
  });
});
