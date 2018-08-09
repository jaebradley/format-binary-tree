const getLeftChildIndex = index => index * 2 + 1;
const getRightChildIndex = index => index * 2 + 2;
const isDefined = value => typeof value !== 'undefined';
const getBaseLog = ({ base, value }) => (Math.log(value) / Math.log(base));
const getLevel = index => Math.ceil(getBaseLog({ base: 2, value: index + 2 }));

const outputNode = ({
  index,
  values,
  nodeSymbol,
  indentationSize,
}) => {
  let output = '';
  const value = values[index];
  const level = getLevel(index);
  const indentation = new Array((level - 1) * indentationSize + 1).join(' ');
  output += `${indentation}${nodeSymbol} ${value}\n`;
  const rightChildIndex = getRightChildIndex(index);
  const leftChildIndex = getLeftChildIndex(index);
  if (isDefined(values[rightChildIndex]) || isDefined(values[leftChildIndex])) {
    output += outputNode({
      values,
      nodeSymbol,
      indentationSize,
      index: rightChildIndex,
    });
    output += outputNode({
      values,
      nodeSymbol,
      indentationSize,
      index: leftChildIndex,
    });
  }

  return output;
};

const formatBinaryTree = ({
  values,
  nodeSymbol = '•',
  indentationSize = 2,
}) => outputNode({
  values,
  nodeSymbol,
  indentationSize,
  index: 0,
});


export default formatBinaryTree;
