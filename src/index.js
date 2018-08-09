const getLeftChildIndex = index => index * 2 + 1;
const getRightChildIndex = index => index * 2 + 2;
const getBaseLog = ({ base, value }) => (Math.log(value) / Math.log(base));
const getLevel = index => Math.ceil(getBaseLog({ base: 2, value: index + 2 }));


const branch = ({
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
  const rightIndex = getRightChildIndex(index);
  const leftIndex = getLeftChildIndex(index);
  if (values[rightIndex] || values[leftIndex]) {
    output += branch({
      output,
      values,
      nodeSymbol,
      indentationSize,
      index: rightIndex,
    });
    output += branch({
      output,
      values,
      nodeSymbol,
      indentationSize,
      index: leftIndex,
    });
  }

  return output;
};

const bstring = ({
  values,
  nodeSymbol = '*',
  indentationSize = 2,
}) => branch({
  index: 0,
  values,
  nodeSymbol,
  indentationSize,
});


export default bstring;
