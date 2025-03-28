var shortestPalindrome = function (s) {
    var pattern = s.split('').reverse().join(''); //The string but in reverse
    var patternIndex = 0; //An index so we can 
    var string = s + "*" + pattern; //This is the string that will help us to find the lps
    var lps = []; //Longest Propper Prefix, used in the KPM algorithm. 
    var aux; //Just an auxiliar for the index
    lps[0] = 0;
    for (var i = 1; i < string.length; i++) //This loop fill the lps array
     {
        while (string[i] != string[patternIndex] && patternIndex > 0) {
            aux = patternIndex;
            patternIndex = lps[aux - 1];
        }
        if (string[i] == string[patternIndex]) {
            patternIndex += 1;
        }
        lps[i] = patternIndex;
    }
    var palindrome = pattern.slice(0, pattern.length - patternIndex) + s; //Took the prefix and put it in front of the original string.
    return palindrome;
};
