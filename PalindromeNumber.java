public class PalindromeNumber {

    public static boolean isPalindrome(int x) {
        String number = String.valueOf(x);
        boolean isPalindrome = true;
        for (int i = 0, l = number.length(); i < l / 2; i++) {
            if (number.charAt(i) != number.charAt(l - i - 1))
                return false;
        }
        return isPalindrome;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome(121));
        System.out.println(isPalindrome(-121));
        System.out.println(isPalindrome(1551));
    }
}