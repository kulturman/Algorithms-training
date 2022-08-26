import java.util.HashMap;
import java.util.Scanner;

public class RipOff {

    private static HashMap<String, Integer> memo = new HashMap<>();
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int nbSquares = sc.nextInt();
        int maxSteps = sc.nextInt();
        int nbTurns = sc.nextInt();
        int [] board = new int[nbSquares + 1];
        board[0] = 0;

        for (int i = 1; i <= nbSquares; i++) {
            board[i] = sc.nextInt();
        }
        
        System.out.println(getMaxAmount(board, 0, maxSteps, nbTurns));
    }

    public static int getMaxAmount(int [] board, int startPoint, int maxSteps, int nbTurns) {
        if (startPoint > board.length - 1) {
            return 0;
        }

        if (nbTurns <= 0) {
            return Integer.MIN_VALUE;
        }

        int maxAmount = Integer.MIN_VALUE;
        String key = String.format("%d,%d", startPoint, nbTurns);

        if (memo.containsKey(key)) {
            return memo.get(key);
        }

        for (int i = 1; i <= maxSteps; i++) {
            int currentMaxAmount = getMaxAmount(board, startPoint + i, maxSteps, nbTurns - 1);

            if (currentMaxAmount > maxAmount) {
                maxAmount = currentMaxAmount;
            }
        }

        memo.put(key, maxAmount == Integer.MIN_VALUE ? maxAmount : maxAmount + board[startPoint]);
        return memo.get(key);
    }
}
