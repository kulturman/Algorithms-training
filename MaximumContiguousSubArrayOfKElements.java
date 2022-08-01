public class MaximumContiguousSubArrayOfKElements {
    public static int findMaxSumSubArray(int k, int[] arr) {
        int max = Integer.MAX_VALUE;
        int currentSum = 0;
        int windowStart = 0;

        for (int windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        currentSum += arr[windowEnd];

        if (windowEnd >= k - 1) {
            max = Math.max(max, currentSum);
            currentSum -= arr[windowStart];
            windowStart++;
        }

        }

        return currentSum;;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        System.out.println(findMaxSumSubArray(3, arr));
    }
}