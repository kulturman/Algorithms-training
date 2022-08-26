Solution to: https://www.hackerrank.com/challenges

public class FunnyString
{
    static String funnyString(String s) 
    {
        String str = new StringBuilder(s).reverse().toString();

        for (int i = 1 , l = str.length() ; i < l - 1 ; i++) 
        {
            if(abs(str.charAt(i) - str.charAt(i - 1)) != abs(s.charAt(i) - s.charAt(i - 1)))
                return "Not Funny";
        }
        
        return "Funny";
    }

    public static void main(String[] args) 
    {
        System.out.println(funnyString("acxz"));
        System.out.println(funnyString("bcxz"));
    }
}