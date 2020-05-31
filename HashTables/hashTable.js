// [  [ ['key', 'value']. ['key', 'value'] ]  [ [] ] ]
class HashMap {
    constructor() {
        this.size = 2;
        this.store = [];
    }

    set(key, value) {
        if (typeof key !== 'string') {
            throw new Error(`the key - ${key} must be a string!`);
        }
        const address = this._hash(key);

        if (this.store[address] !== undefined) {
            let idxMatch;

            this.store[address].forEach((tuple, index) => {
                if (tuple[0] === key) {
                    idxMatch = index;
                }
            });

            if (idxMatch) {
                console.log(this.store[address])
                this.store[address][idxMatch][0] = value;
            } else {
                this.store[address].push([key, value]);
            }
        } else {
            this.store[address] = [[key, value]];
        }
    }

    get() {}

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i)) % this.size;
        }
        return hash;
    }
}

const map = new HashMap();
map.set('key 1', 1);
map.set('key 1', 2);
// map.set('key 3', 3);
// map.set('key 4', 4);
// map.set('key 1', 5);

// console.log(map.size, map.store);

// console.log(map.get('key'));
// map.delete('key');
