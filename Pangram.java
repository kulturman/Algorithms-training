//Solution to: https://www.hackerrank.com/challenges/pangrams/problem
public class Solution {
    public static void pangram(String str) {
        int alphabet[] = new int[26];
        Arrays.fill(alphabet , 0);
        str.chars().forEach(item -> alphabet[item - 'a']++);
        Arrays.sort(alphabet);
        if(alphabet[0] == 0)
            System.out.println("not pangram");
        else
            System.out.println("pangram");
    }

    public static void main(String[] args) {
        isPangram("The quick brown fox jumps over the lazy dog");
    }
}