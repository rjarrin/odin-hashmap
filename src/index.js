/* eslint-disable no-console */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */

import HashMap from './hashmap.js';

// Testing HashMap
const hashMap = new HashMap();

// Test set, get, and has
hashMap.set('key1', 'value1');
console.log(
    hashMap.get('key1') === 'value1'
        ? 'HashMap set/get passed'
        : 'HashMap set/get failed',
);
console.log(
    hashMap.has('key1') === true ? 'HashMap has passed' : 'HashMap has failed',
);

console.log('Done');
