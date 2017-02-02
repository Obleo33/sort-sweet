import { expect } from 'chai';
import bubbleSort from '../scripts/bubble-sort';

describe('Bubble sort test', () => {
  it('should return an array', () => {
    expect(Array.isArray(bubbleSort([])));
  }),

  it('should compare two adjacent values in an array and return the lowest',()=>{
    let filterMe = bubbleSort(['b','a']);
    expect(filterMe).to.deep.equal(['a','b']);
  }),

  it('should sort an array from lowest to highest',()=>{

  })
});
