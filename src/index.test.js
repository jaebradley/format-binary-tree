import bstring from '.';

describe('bstring', () => {
  it('should return foo', () => {
    expect(bstring({ values: [1] })).toEqual('* 1\n');
  });

  it('should return foo', () => {
    expect(bstring({ values: [1, 2] })).toEqual('* 1\n  * undefined\n  * 2\n');
  });

  it('should return foo', () => {
    expect(bstring({ values: [1, 2, 3] })).toEqual('* 1\n  * 3\n  * 2\n');
  });

  it('should return foo', () => {
    expect(bstring({ values: [1, 2, 3, 4, 5] })).toEqual('* 1\n  * 3\n  * 2\n    * 5\n    * 4\n');
  });

  it('should return foo', () => {
    expect(bstring({ values: [1, 2, 3, 4, 5, 6] })).toEqual('* 1\n  * 3\n    * undefined\n    * 6\n  * 2\n    * 5\n    * 4\n');
  });
});
