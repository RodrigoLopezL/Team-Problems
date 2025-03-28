class Solution(object):
    def shortestPalindrome(self, s):
        pattern = s[::-1]  
        pattern_index = 0  
        string = s + "*" + pattern
        lps = [0] * len(string)
        for i in range(1, len(string)):
            while string[i] != string[pattern_index] and pattern_index > 0:
                pattern_index = lps[pattern_index - 1]
            if string[i] == string[pattern_index]:
                pattern_index += 1
            lps[i] = pattern_index
        palindrome = pattern[:len(pattern) - pattern_index] + s
        return palindrome
