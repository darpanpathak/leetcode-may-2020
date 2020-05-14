/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.head = {};
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    var current = this.head;

    for (var i = 0; i < word.length; i++) {
        if (!(word[i] in current)) {
            current[word[i]] = {};
        }

        current = current[word[i]];
    }

    current.$ = 1;  //word end marker
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {

    var current = this.head;

    for (var i = 0; i < word.length; i++) {
        if (!(word[i] in current)) {
            return false;
        }

        current = current[word[i]];
    }

    return current.$ === 1; //word end marker
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    var current = this.head;

    for (var i = 0; i < prefix.length; i++) {
        if (!(prefix[i] in current)) {
            return false;
        }

        current = current[prefix[i]];
    }

    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

function main() {
    const trie = new Trie();

    trie.insert("apple");
    const search = trie.startsWith("app");   // returns true

    console.log(search);
}

main();