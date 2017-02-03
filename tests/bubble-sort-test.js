import { expect } from 'chai';
import bubbleSort from '../scripts/bubble-sort';

describe('Bubble sort test', () => {
  it('should return an array', () => {
    expect(Array.isArray(bubbleSort([])));
  }),

  it('should sort an array of numbers',()=>{
    let filterMe = bubbleSort([7,4,1,3,6,2,5]);
    expect(filterMe).to.deep.equal([1,2,3,4,5,6,7]);
  })

  it('should sort an array of letters',()=>{
    let filterMe = bubbleSort(['g','d','a','f','c','e','b']);
    expect(filterMe).to.deep.equal(['a','b','c','d','e','f','g']);
  })

  it('should retain a numerically sorted array',()=>{
    let filterMe = bubbleSort([1,2,3,4]);
    expect(filterMe).to.deep.equal([1,2,3,4]);
  })

  it('should retain a alphabetically sorted array',()=>{
    let filterMe = bubbleSort(['a','b','c','d']);
    expect(filterMe).to.deep.equal(['a','b','c','d']);
  })
});
