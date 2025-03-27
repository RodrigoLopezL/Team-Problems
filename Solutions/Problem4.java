class Solution {
    public String shortestPalindrome(String s) {
        String pattern = "";
        for(int i = 0; i < s.length(); i++)
        {
            pattern = s.charAt(i) + pattern;
        }
        int patternIndex = 0;
        String string = s + "*" + pattern;
        int[] lps = new int[string.length()];
        lps[0] = 0;
        for(int i = 1; i < string.length(); i++)
        {
            while((string.charAt(i) != string.charAt(patternIndex)) && (patternIndex > 0))
            {
                patternIndex = lps[patternIndex-1];
            }
            if(string.charAt(i) == string.charAt(patternIndex))
            {
                patternIndex ++;
            }
            lps[i] = patternIndex;
        }
        String front = "";
        for(int i = 0; i < (pattern.length()-patternIndex); i++)
        {
            front = front + pattern.charAt(i);
        }
        String palindrome = front + s;
        System.out.println(pattern);
        return pattern;
    }
}