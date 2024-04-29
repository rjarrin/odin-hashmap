class HashMap {
    // Only handle keys of type strings for this implementation
    constructor() {
        // Initialize the buckets array to store key-value pairs
        this.buckets = [];
        this.size = 0;
    }

    // Takes a key and produces a hash code with it.
    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        // Iterate over each character in the key to generate the hash code
        for (let i = 0; i < key.length; i += 1) {
            // Apply modulo operator on each iteration to prevent overflow
            hashCode =
                (primeNumber * hashCode + key.charCodeAt(i)) %
                this.buckets.length;
        }
        return hashCode;
    }

    // Sets a new item (i.e., key-value pair) in the hashmap
    set(key, value) {
        const index = this.hash(key);
        // If the bucket at the hashed index does not exist, initialize it
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }
        // Find the entry in the bucket with the matching key
        const entry = this.buckets[index].find(
            (bucketEntry) => bucketEntry.key === key,
        );
        // If the entry exists, update its value; else, add a new entry
        if (entry) {
            entry.value = value;
        } else {
            this.buckets[index].push({ key, value });
            this.size += 1;
        }
    }

    // Retrieve the value associated with the given key
    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        if (bucket) {
            const entry = bucket.find((bucketEntry) => bucketEntry.key === key);
            return entry ? entry.value : null;
        }
        return null;
    }

    // Check if a key exists in the hashmap
    has(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        if (bucket) {
            return bucket.some((bucketEntry) => bucketEntry.key === key);
        }
        return false;
    }

    // Remove a key-value pair from the hashmap
    remove(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        if (bucket) {
            const entryIndex = bucket.findIndex(bucketEntry => bucketEntry.key === key);
            if (entryIndex > -1) {
                bucket.splice(entryIndex, 1);
                this.size -= 1;
                return true;
            }
        }
        return false;
    }

    // Return the number of stored keys in the hashmap
    length() {
        return this.size;
    }

    // Remove all entries in the hashmap
    clear() {
        this.buckets = [];
        this.size = 0;
    }
}

export default HashMap;
