import { expect } from 'chai';
import insertionSort from '../scripts/insertion-sort';

describe('Insertion sort tests', () => {
  it('should return an array', () => {
    expect(Array.isArray(insertionSort([])));
  });

  it('should sort an array of numbers',()=>{
    let filterMe = insertionSort([7,4,1,3,6,2,5]);
    expect(filterMe).to.deep.equal([1,2,3,4,5,6,7]);
  })

  it('should sort an array of letters',()=>{
    let filterMe = insertionSort(['g','d','a','f','c','e','b']);
    expect(filterMe).to.deep.equal(['a','b','c','d','e','f','g']);
  })

  it('should retain a sorted array',()=>{
    let filterMe = insertionSort([1,2,3,4]);
    expect(filterMe).to.deep.equal([1,2,3,4]);
  })

  it('should retain a alphabetically sorted array',()=>{
    let filterMe = insertionSort(['a','b','c','d']);
    expect(filterMe).to.deep.equal(['a','b','c','d']);
  })
});
