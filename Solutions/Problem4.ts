var shortestPalindrome = function(s:string):string {
    let pattern:string = s.split('').reverse().join('') //The string but in reverse
    let patternIndex:number = 0 //An index so we can 
    let string:string = s+"*"+pattern;//This is the string that will help us to find the lps
    let lps:number[] = [] //Longest Propper Prefix, used in the KPM algorithm. 
    let aux:number;//Just an auxiliar for the index
    lps[0] = 0
    for(let i = 1; i < string.length; i++)//This loop fill the lps array
    {
        while(string[i] != string[patternIndex] && patternIndex > 0)
        {
            aux = patternIndex
            patternIndex = lps[aux-1]
        }
        if(string[i] == string[patternIndex])
        {
            patternIndex += 1
            
        }
        lps[i] = patternIndex
    }
    let palindrome = pattern.slice(0, pattern.length-patternIndex) + s;//Took the prefix and put it in front of the original string.
    return palindrome
};