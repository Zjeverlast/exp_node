//npm init -y (everything default)
const _ = require('lodash')

const items = [1, [5, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);