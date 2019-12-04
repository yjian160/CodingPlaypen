function Node(char) {
    this.val = char;
    this.children = {};
    this.isWord = false;
    this.word = '';
}

var root  = new Node('');

var wordBank = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];

for (var i = 0; i < wordBank.length; i++) {
    let currentWord = wordBank[i];
    let currentNode = root;

    for (var c = 0; c < currentWord.length; c++) {
        if (typeof(currentNode.children[currentWord[c]]) === 'undefined') {
            currentNode.children[currentWord[c]] = new Node(currentWord[c]);
        }

        if (c === currentWord.length - 1) {
            currentNode.children[currentWord[c]].isWord = true;
            currentNode.children[currentWord[c]].word = currentWord;
        }

        currentNode = currentNode.children[currentWord[c]];
    }
}

var results = [];
traverseTrie(root, 'mouse', results);

function traverseTrie(node, searchParams, results) {
    let charSearchCount = 0;
    let currentNode = node;

    while(searchParams.length > 0) {
        let currentChar = searchParams[0];
        searchParams = searchParams.substring(1, searchParams.length);
        charSearchCount++;

        if (typeof(currentNode.children[currentChar]) === 'undefined') {
            return;
        }

        if (charSearchCount > 1) {
            var resultsForCurrentNode = [];
            dfsFindResults(currentNode.children[currentChar], resultsForCurrentNode);
            results.push(resultsForCurrentNode)
        }
        currentNode = currentNode.children[currentChar];
    }
}

function dfsFindResults(node, results) {
    if (node.isWord) {
        console.log(node)
        results.push(node.word);
    }

    let keys = Object.keys(node.children);

    for (let k = 0; k < keys.length; k++) {
        dfsFindResults(node.children[keys[k]], results);
    }
}