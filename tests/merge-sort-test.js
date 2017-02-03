import { expect } from 'chai';
import mergeSort from '../scripts/merge-sort';

describe('Merge sort tests', () => {
  it('should return an array', () => {
    expect(Array.isArray(mergeSort([])));
  });

  it('should sort an array of numbers',()=>{
    let filterMe = mergeSort([7,4,1,3,6,2,5]);
    expect(filterMe).to.deep.equal([1,2,3,4,5,6,7]);
  })

  it('should sort an array of letters',()=>{
    let filterMe = mergeSort(['g','d','a','f','c','e','b']);
    expect(filterMe).to.deep.equal(['a','b','c','d','e','f','g']);
  })

  it('should retain a sorted array',()=>{
    let filterMe = mergeSort([1,2,3,4]);
    expect(filterMe).to.deep.equal([1,2,3,4]);
  })

  it('should retain a alphabetically sorted array',()=>{
    let filterMe = mergeSort(['a','b','c','d']);
    expect(filterMe).to.deep.equal(['a','b','c','d']);
  })
});
