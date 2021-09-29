public class ReverseInteger {
    public static int reverse(int x) {
        int multiplier = x < 0 ? -1: 1;
        StringBuilder builder = new StringBuilder(String.valueOf(Math.abs(x)));
        
        return multiplier * Integer.valueOf(builder.reverse().toString());
    }

    public static void main(String[] args) {
        System.out.println(reverse(123));
        System.out.println(reverse(-123));
        System.out.println(reverse(120));
        System.out.println(reverse(0));
    }
}