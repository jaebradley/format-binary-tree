import formatBinaryTree from '.';

describe('formatBinaryTree', () => {
  it('formats tree with only head', () => {
    expect(formatBinaryTree({ values: [1] })).toEqual('• 1\n');
  });

  it('formats tree with single child', () => {
    expect(formatBinaryTree({ values: [1, 2] })).toEqual('• 1\n  • undefined\n  • 2\n');
  });

  it('formats tree with two children', () => {
    expect(formatBinaryTree({ values: [1, 2, 3] })).toEqual('• 1\n  • 3\n  • 2\n');
  });

  it('formats tree with unbalanced subtrees', () => {
    expect(formatBinaryTree({ values: [1, 2, 3, 4, 5] })).toEqual('• 1\n  • 3\n  • 2\n    • 5\n    • 4\n');
  });

  it('formats tree with balanced left subtree and unbalanced right subtree', () => {
    expect(formatBinaryTree({ values: [1, 2, 3, 4, 5, 6] })).toEqual('• 1\n  • 3\n    • undefined\n    • 6\n  • 2\n    • 5\n    • 4\n');
  });

  it('formats tree with balanced right subtree and unbalanced left', () => {
    expect(formatBinaryTree({ values: [1, 2, 3, 4, null, 5, 6] })).toEqual('• 1\n  • 3\n    • 6\n    • 5\n  • 2\n    • null\n    • 4\n');
  });

  describe('defined nodeSymbol', () => {
    it('formats tree with only head', () => {
      expect(formatBinaryTree({ values: [1], nodeSymbol: '*' })).toEqual('* 1\n');
    });

    it('formats tree with single child', () => {
      expect(formatBinaryTree({ values: [1, 2], nodeSymbol: '*' })).toEqual('* 1\n  * undefined\n  * 2\n');
    });

    it('formats tree with two children', () => {
      expect(formatBinaryTree({ values: [1, 2, 3], nodeSymbol: '*' })).toEqual('* 1\n  * 3\n  * 2\n');
    });

    it('formats tree with unbalanced subtrees', () => {
      expect(formatBinaryTree({ values: [1, 2, 3, 4, 5], nodeSymbol: '*' })).toEqual('* 1\n  * 3\n  * 2\n    * 5\n    * 4\n');
    });

    it('formats tree with balanced left subtree and unbalanced right subtree', () => {
      expect(formatBinaryTree({ values: [1, 2, 3, 4, 5, 6], nodeSymbol: '*' })).toEqual('* 1\n  * 3\n    * undefined\n    * 6\n  * 2\n    * 5\n    * 4\n');
    });

    it('formats tree with balanced right subtree and unbalanced left', () => {
      expect(formatBinaryTree({ values: [1, 2, 3, 4, null, 5, 6], nodeSymbol: '*' })).toEqual('* 1\n  * 3\n    * 6\n    * 5\n  * 2\n    * null\n    * 4\n');
    });
  });
});
