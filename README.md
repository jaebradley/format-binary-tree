[![Greenkeeper badge](https://badges.greenkeeper.io/jaebradley/format-binary-tree.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/jaebradley/format-binary-tree.svg?branch=master)](https://travis-ci.org/jaebradley/format-binary-tree)
[![codecov](https://codecov.io/gh/jaebradley/format-binary-tree/branch/master/graph/badge.svg)](https://codecov.io/gh/jaebradley/format-binary-tree)
[![npm](https://img.shields.io/npm/v/format-binary-tree.svg)](https://www.npmjs.com/package/format-binary-tree)
[![npm](https://img.shields.io/npm/dt/format-binary-tree.svg)](https://www.npmjs.com/package/format-binary-tree)

# format-binary-tree

Binary trees can be stored as a linked list, but they can also be represented as an array (for example, when working with [binary heaps](http://www.cse.hut.fi/en/research/SVG/TRAKLA2/tutorials/heap_tutorial/taulukkona.html)).

I didn't see a library that formats binary trees implemented as an array, so I decided to create this very simple library.

## Installation

```bash
npm install format-binary-tree
```

```bash
yarn add format-binary-tree
```

## Usage

```javascript
import formatBinaryTree from 'format-binary-tree';

formatBinaryTree({ values: [1, 2, 3, 4, 5, 6, 7, 8, 9] });

// • 1
//   • 3
//     • 7
//     • 6
//   • 2
//     • 5
//     • 4
//       • 9
//       • 8
```

## API

`formatBinaryTree({ values, nodeSymbol, indentationSize })`
  * `values` is the array of values that represent the binary tree
  * `nodeSymbol` is the string that prefixes each node - defaults to `•`
  * `indentationSize` is a number that represents the number of spaces to indent each level - defaults to `2`

`formatBinaryTree` traverses the tree by going `root`, `right`, `left`. I know this isn't a "standard" traversal, but I found it easier to visualize the tree this way.
