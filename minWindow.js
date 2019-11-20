/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    var leftPointer = 0;
    var rightPointer = 0;
    
    var shouldExpand = false;
    
    var smallestString = '';
    
    var windowCharCounts = {};
    
    //Get initial window
    while (rightPointer < s.length && Object.keys(windowCharCounts).length < t.length) {
        if (t.includes(s[rightPointer])) {
            if (!windowCharCounts[s[rightPointer]]) {
                windowCharCounts[s[rightPointer]] = 1;
            } else {
                windowCharCounts[s[rightPointer]] = windowCharCounts[s[rightPointer]] + 1;
            }
        }
        rightPointer++;
    }

    if (rightPointer >= s.length && Object.keys(windowCharCounts).length < t.length) {
        return '';
    }

    smallestString = s.slice(leftPointer, rightPointer);

    while ((rightPointer < s.length && leftPointer < s.length)) {
        if (shouldExpand) {
            rightPointer++;
            if (t.includes(s[rightPointer])) {
                windowCharCounts[s[rightPointer]] = windowCharCounts[s[rightPointer]] + 1;
                shouldExpand = false;
            }
        } else {
            if (t.includes(s[leftPointer]) && windowCharCounts[s[leftPointer]] <= 1) {
                shouldExpand = true;
            } else {
                if (t.includes(s[leftPointer])) {
                    windowCharCounts[s[leftPointer]] = windowCharCounts[s[leftPointer]] - 1;
                }
                leftPointer++;
            }
        }

        if (rightPointer + 1 - leftPointer < smallestString.length) {
            smallestString = s.slice(leftPointer, rightPointer + 1);
        }
    }

    return smallestString;
};

