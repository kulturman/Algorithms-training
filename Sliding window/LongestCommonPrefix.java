public class LongestCommonPrefix {

    public static String longestCommonPrefix(String[] strs) {
        StringBuilder longestCommonPrefix = new StringBuilder("");
        String firtstString = strs[0];

        for (int i = 0, l = firtstString.length(); i < l; i++) {
            boolean isThisCurrentLongestCommonPrefix = true;

            for (int j = 1; j < strs.length; j++) {
                if (!strs[j].startsWith(firtstString.substring(0, i + 1))) {
                    isThisCurrentLongestCommonPrefix = false;
                }
            }

            if (isThisCurrentLongestCommonPrefix) {
                longestCommonPrefix.append(firtstString.charAt(i));
            }
        }

        return longestCommonPrefix.toString();
    }

    public static void main(String[] args) {
        System.out.println(longestCommonPrefix(new String[] {"flower", "flow", "flight"}));
        System.out.println(longestCommonPrefix(new String[] {"dog", "racecar", "car"}));
        System.out.println(longestCommonPrefix(new String[] {"dog", "dc", "doctor"}));
    }
}