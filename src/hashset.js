/* eslint-disable import/extensions */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import HashMap from './hashmap.js';

class HashSet {
    constructor() {
        this.map = new HashMap();
    }

    // Add an element to the hashset
    add(element) {
        // Use the element as the key and a dummy value
        this.map.set(element, true);
    }

    // Remove an element from the hashset
    remove(element) {
        this.map.remove(element);
    }

    // Check if an element exists in the hashset
    has(element) {
        return this.map.has(element);
    }

    // Return the number of elements in the hashset
    size() {
        return this.map.length();
    }

    // Clear all elements from hashset
    clear() {
        this.map.clear();
    }
}

export default HashSet;
