/* eslint-disable no-console */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */

import HashMap from './hashmap.js';
import HashSet from './hashset.js';

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

// Test update value
hashMap.set('key1', 'newValue1');
console.log(
    hashMap.get('key1') === 'newValue1'
        ? 'HashMap update value passed'
        : 'HashMap update value failed',
);

// Test remove
hashMap.remove('key1');
console.log(
    hashMap.has('key1') === false
        ? 'HashMap remove passed'
        : 'HashMap remove failed',
);

// Test length
hashMap.set('key2', 'value2');
console.log(
    hashMap.length() === 1 ? 'HashMap length passed' : 'HashMap length failed',
);

// Test clear
hashMap.clear();
console.log(
    hashMap.length() === 0 ? 'HashMap clear passed' : 'HashMap clear failed',
);

// Testing resize logic
hashMap.set('key3', 'value3');
hashMap.set('key4', 'value4');
hashMap.set('key13', 'value3');
hashMap.set('key14', 'value4');
hashMap.set('key113', 'value3');
hashMap.set('key114', 'value4');
hashMap.set('key1113', 'value3');
hashMap.set('key1114', 'value4');
hashMap.set('key23', 'value3');
hashMap.set('key24', 'value4');
hashMap.set('key223', 'value3');
hashMap.set('key224', 'value4');
hashMap.set('key2223', 'value3');
hashMap.set('key2224', 'value4');
hashMap.set('key123', 'value3');
hashMap.set('key124', 'value4');
hashMap.set('key12223', 'value3');
hashMap.set('key12224', 'value4');
console.log(hashMap.buckets);
console.log(hashMap.length());
hashMap.clear();

// Test keys, values, and entries
hashMap.set('key3', 'value3');
hashMap.set('key4', 'value4');

// Test keys
console.log(
    JSON.stringify(hashMap.keys().sort()) === JSON.stringify(['key3', 'key4'])
        ? 'HashMap keys passed'
        : 'HashMap keys failed',
);

// Test values
console.log(
    JSON.stringify(hashMap.values().sort()) ===
        JSON.stringify(['value3', 'value4'])
        ? 'HashMap values passed'
        : 'HashMap values failed',
);

// Test entries
console.log(
    JSON.stringify(
        hashMap.entries().sort((a, b) => a[0].localeCompare(b[0])),
    ) ===
        JSON.stringify(
            [
                ['key3', 'value3'],
                ['key4', 'value4'],
            ].sort((a, b) => a[0].localeCompare(b[0])),
        )
        ? 'HashMap entries passed'
        : 'HashMap entries failed',
);

console.log('Done with HashMap testing\n');

const hashSet = new HashSet();

console.log('Done with HashSet testing');
