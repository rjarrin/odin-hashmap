class HashMap {
    // Only handle keys of type strings for this implementation
    constructor() {
        // Initialize the buckets array to store key-value pairs
        this.buckets = new Array(10);
        this.size = 0;
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i += 1) {
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
            // Check if the hashmap needs to be resized
            this.checkResize();
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
            const entryIndex = bucket.findIndex(
                (bucketEntry) => bucketEntry.key === key,
            );
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
        this.buckets = new Array(this.buckets.length);
        this.size = 0;
    }

    // Return an array containing all the keys inside the hashmap
    keys() {
        return this.buckets.flatMap((bucket) =>
            bucket.map((entry) => entry.key),
        );
    }

    // Return an array containing all values
    values() {
        return this.buckets.flatMap((bucket) =>
            bucket.map((entry) => entry.value),
        );
    }

    // Return an array that contains each [key, value] pair
    entries() {
        return this.buckets.flatMap((bucket) =>
            bucket.map((entry) => [entry.key, entry.value]),
        );
    }

    // Determine whether the hashmap capacity needs to be resized
    checkResize() {
        const loadFactor = this.size / this.buckets.length;
        if (loadFactor > 0.7) {
            this.resize();
        }
    }

    // Resize the hashmap's buckets array
    resize() {
        const oldBuckets = this.buckets;
        // Double the size
        this.buckets = new Array(this.buckets.length * 2);
        // Reset the size prior to re-adding all entries
        this.size = 0;
        oldBuckets.forEach((bucket) => {
            if (bucket) {
                bucket.forEach((entry) => {
                    // Re-add entries to the resized hashmap
                    this.set(entry.key, entry.value);
                });
            }
        });
    }
}

export default HashMap;
